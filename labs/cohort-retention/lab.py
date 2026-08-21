from collections import defaultdict
events=[('u1',0),('u1',1),('u1',2),('u2',0),('u2',2),('u3',1),('u3',2),('u4',1),('u5',2)]
def retention(events,cutoff):
    periods=defaultdict(set)
    for user,period in events:periods[user].add(period)
    cohort={u:min(ps) for u,ps in periods.items()}
    sizes=defaultdict(int); retained=defaultdict(int)
    for u,c in cohort.items():
        sizes[c]+=1
        for p in periods[u]:retained[(c,p-c)]+=1
    rates={(c,age):retained[(c,age)]/sizes[c] for c in sizes for age in range(cutoff-c+1)}
    return cohort,dict(sizes),rates
cohort,sizes,rates=retention(events,2)

# ---- Use it ----
import pandas as pd
df=pd.DataFrame(events,columns=['user','period']).drop_duplicates()
df['cohort']=df.groupby('user')['period'].transform('min')
df['age']=df['period']-df['cohort']
pandas_sizes=df.groupby('cohort')['user'].nunique().to_dict()
pandas_rates=(df.groupby(['cohort','age'])['user'].nunique()/df.groupby('cohort')['user'].nunique()).to_dict()

# ---- Verify it ----
assert cohort=={'u1':0,'u2':0,'u3':1,'u4':1,'u5':2}
assert sizes==pandas_sizes=={0:2,1:2,2:1}
assert rates==pandas_rates
assert rates[(0,1)]==0.5 and rates[(0,2)]==1.0
assert (1,2) not in rates and (2,1) not in rates
assert all(0<=v<=1 for v in rates.values())
assert all(rates[(c,0)]==1 for c in sizes)
