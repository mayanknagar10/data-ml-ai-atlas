def inner_join(left,right,key):
    out=[]
    for lrow in left:
        for rrow in right:
            if lrow.get(key) is not None and lrow.get(key)==rrow.get(key):
                out.append({**lrow,**rrow})
    return out

def left_join(left,right,key):
    out=[]
    right_fields=set().union(*(r.keys() for r in right)) if right else set()
    for lrow in left:
        matches=[r for r in right if lrow.get(key) is not None and lrow.get(key)==r.get(key)]
        if matches:
            out.extend({**lrow,**r} for r in matches)
        else:
            out.append({**{f:None for f in right_fields if f not in lrow},**lrow})
    return out
