def dictionary_encode(values):
    dictionary=[]; index={} ; codes=[]
    for value in values:
        if value not in index:
            index[value]=len(dictionary); dictionary.append(value)
        codes.append(index[value])
    return dictionary,codes

def groups(rows,size):
    out=[]
    for start in range(0,len(rows),size):
        chunk=rows[start:start+size]
        out.append({'rows':chunk,'min_ts':min(r['ts'] for r in chunk),'max_ts':max(r['ts'] for r in chunk)})
    return out

def scan(groups_,lo,hi):
    selected=[g for g in groups_ if not (g['max_ts']<lo or g['min_ts']>hi)]
    return [r for g in selected for r in g['rows'] if lo<=r['ts']<=hi],len(selected)

# ---- Use it ----
rows=[{'ts':i,'region':['EU','EU','US'][i%3],'amount':float(i)} for i in range(12)]
rows.sort(key=lambda r:r['ts'])
dictionary,codes=dictionary_encode([r['region'] for r in rows])
row_groups=groups(rows,4)
result,selected=scan(row_groups,5,6)
try:
    import pyarrow as pa, pyarrow.parquet as pq, tempfile
except ImportError:
    pa=pq=None
if pa is not None:
    path=tempfile.NamedTemporaryFile(suffix='.parquet',delete=False).name
    pq.write_table(pa.Table.from_pylist(rows),path,row_group_size=4)
    arrow_rows=pq.read_table(path,columns=['ts','amount'],filters=[('ts','>=',5),('ts','<=',6)]).to_pylist()

# ---- Verify it ----
assert dictionary==['EU','US']
assert [dictionary[code] for code in codes]==[r['region'] for r in rows]
assert [r['ts'] for r in result]==[5,6]
assert selected==1 and selected < len(row_groups)
if pa is not None:
    assert arrow_rows==[{'ts':5,'amount':5.0},{'ts':6,'amount':6.0}]
