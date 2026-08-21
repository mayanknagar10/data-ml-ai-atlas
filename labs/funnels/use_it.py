from collections import defaultdict
steps=['cart','payment','purchase']
events=[('u1','cart',0),('u1','payment',2),('u1','purchase',5),('u1','purchase',6),('u2','cart',0),('u2','purchase',3),('u3','cart',0),('u3','payment',8),('u3','purchase',12),('u4','cart',0),('u4','payment',2)]
def ordered_funnel(events,steps,window):
    by_user=defaultdict(list)
    for user,event,t in events:by_user[user].append((t,event))
    counts=[0]*len(steps); reached={}
    for user,history in by_user.items():
        history.sort(); index=0; start=None
        for t,event in history:
            if index==0 and event==steps[0]:start=t; index=1; counts[0]+=1
            elif start is not None and t-start<=window and index<len(steps) and event==steps[index]:
                index+=1; counts[index-1]+=1
        reached[user]=index
    return counts,reached
counts,reached=ordered_funnel(events,steps,10)

# ---- Use it ----
import pandas as pd
df=pd.DataFrame(events,columns=['user','event','time'])
entry_users=set(df.loc[df.event=='cart','user'])
pandas_entry=len(entry_users)
unique_event_users=df.groupby('event')['user'].nunique().to_dict()
