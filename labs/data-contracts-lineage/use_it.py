def validate(rows,contract):
    errors=[]
    for i,row in enumerate(rows):
        for name,spec in contract['columns'].items():
            if name not in row: errors.append((i,name,'missing')); continue
            value=row[name]
            if value is None and not spec['nullable']: errors.append((i,name,'null'))
            if value is not None and not isinstance(value,spec['type']): errors.append((i,name,'type'))
    key=contract['key']; values=[row.get(key) for row in rows]
    if len(values)!=len(set(values)): errors.append((-1,key,'duplicate'))
    return errors

def downstream(edges,start):
    seen=set(); frontier=list(start)
    while frontier:
        node=frontier.pop(0)
        for child in edges.get(node,[]):
            if child not in seen: seen.add(child); frontier.append(child)
    return seen

# ---- Use it ----
v1={'key':'customer_id','columns':{'customer_id':{'type':int,'nullable':False},'tier':{'type':str,'nullable':False}}}
rows=[{'customer_id':1,'tier':'gold'},{'customer_id':2,'tier':'silver'}]
edges={'raw.customer':['job.build_customer'],'job.build_customer':['mart.customer'],'mart.customer':['job.dashboard','job.features'],'job.dashboard':['dashboard.revenue'],'job.features':['model.churn']}
impact=downstream(edges,{'mart.customer'})
