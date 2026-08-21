def row_number(rows,partition_key,order_key):
    groups={}
    for row in rows: groups.setdefault(row[partition_key],[]).append(row)
    out=[]
    for group in groups.values():
        for number,row in enumerate(sorted(group,key=order_key),1): out.append({**row,'row_number':number})
    return out
