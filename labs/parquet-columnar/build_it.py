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
