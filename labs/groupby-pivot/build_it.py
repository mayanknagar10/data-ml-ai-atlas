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
