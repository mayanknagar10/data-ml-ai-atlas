import numpy as np
t=np.array([1,2,2,3,5],float); e=np.array([1,1,0,1,0])
s=1.0
for time in sorted(set(t[e==1])):
    at_risk=(t>=time).sum(); events=((t==time)&(e==1)).sum(); s*=1-events/at_risk
    print(time,s)

# ---- Use it ----
from lifelines import KaplanMeierFitter
km=KaplanMeierFitter().fit(t,event_observed=e)
print(km.survival_function_)
