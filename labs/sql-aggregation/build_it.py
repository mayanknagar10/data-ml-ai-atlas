def grouped_sum(rows,key,value):
    out={}
    for row in rows:
        group=row[key]
        if row[value] is not None: out[group]=out.get(group,0)+row[value]
    return out
