from datetime import date
INF=date.max

def insert_version(rows,key,start,value):
    if any(r['key']==key and r['start']==start and r['value']==value for r in rows): return rows
    same=sorted((r for r in rows if r['key']==key),key=lambda r:r['start'])
    covering=next((r for r in same if r['start']<=start<r['end']),None)
    end=covering['end'] if covering else next((r['start'] for r in same if r['start']>start),INF)
    if covering: covering['end']=start
    rows.append({'key':key,'start':start,'end':end,'value':value})
    return sorted(rows,key=lambda r:(r['key'],r['start']))

def lookup(rows,key,when):
    matches=[r for r in rows if r['key']==key and r['start']<=when<r['end']]
    if len(matches)!=1: raise ValueError('expected one version')
    return matches[0]

# ---- Use it ----
rows=[]
insert_version(rows,'C',date(2024,1,1),'Bronze')
insert_version(rows,'C',date(2024,3,1),'Gold')
insert_version(rows,'C',date(2024,2,10),'Silver')
before_repeat=[dict(r) for r in rows]
insert_version(rows,'C',date(2024,2,10),'Silver')
