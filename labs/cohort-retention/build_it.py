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
