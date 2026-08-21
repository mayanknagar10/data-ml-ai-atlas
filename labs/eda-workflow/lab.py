from collections import Counter

def profile(rows,key,numeric,categorical):
    keys=[r.get(key) for r in rows]
    values=[r.get(numeric) for r in rows if r.get(numeric) is not None]
    categories=Counter(r.get(categorical) for r in rows)
    return {
        'rows':len(rows),'unique_keys':len(set(keys)),
        'duplicate_keys':len(keys)-len(set(keys)),
        'missing_numeric':sum(r.get(numeric) is None for r in rows),
        'numeric_min':min(values),'numeric_max':max(values),
        'categories':dict(categories),
    }

rows=[{'id':1,'amount':12.0,'channel':'web'},{'id':2,'amount':None,'channel':'store'},{'id':3,'amount':8.0,'channel':'web'}]
report=profile(rows,'id','amount','channel')

# ---- Use it ----
import pandas as pd
df=pd.DataFrame(rows)
pandas_report={'rows':len(df),'unique_keys':df['id'].nunique(),'missing_numeric':int(df['amount'].isna().sum()),'numeric_min':float(df['amount'].min()),'numeric_max':float(df['amount'].max())}

# ---- Verify it ----
assert report['rows']==report['unique_keys']==3
assert report['duplicate_keys']==0
assert report['missing_numeric']==1
assert report['numeric_min']>=0
assert report['categories']=={'web':2,'store':1}
for k,v in pandas_report.items(): assert report[k]==v
