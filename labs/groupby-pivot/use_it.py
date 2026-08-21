from collections import defaultdict

events=[('u1',0,0),('u1',0,1),('u1',0,1),('u2',0,0),('u3',1,1),('u3',1,2)]
cohort_members=defaultdict(set); active=defaultdict(set)
for user,cohort,period in events:
    cohort_members[cohort].add(user)
    age=period-cohort
    active[(cohort,age)].add(user)
retention={}
for (cohort,age),users in active.items():
    retention[(cohort,age)]=len(users)/len(cohort_members[cohort])

# ---- Use it ----
import pandas as pd
df=pd.DataFrame(events,columns=['user','cohort','period'])
df['age']=df['period']-df['cohort']
pd_active=df.drop_duplicates(['user','cohort','age']).groupby(['cohort','age'])['user'].nunique()
pd_sizes=df.drop_duplicates(['user','cohort']).groupby('cohort')['user'].nunique()
pd_retention={(c,a):count/pd_sizes.loc[c] for (c,a),count in pd_active.items()}
