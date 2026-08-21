import numpy as np
def kaplan_meier(time,event):
    time=np.asarray(time,float); event=np.asarray(event,int)
    event_times=np.unique(time[event==1]); surv=[]; at_risk=[]; events=[]; s=1.0
    for t in event_times:
        n=int(np.sum(time>=t)); d=int(np.sum((time==t)&(event==1)))
        s*=1-d/n; at_risk.append(n); events.append(d); surv.append(s)
    return event_times,np.array(surv),np.array(at_risk),np.array(events)
def logrank(t1,e1,t0,e0):
    times=np.unique(np.r_[np.asarray(t1)[np.asarray(e1)==1],np.asarray(t0)[np.asarray(e0)==1]])
    oe=0.0; var=0.0
    for t in times:
        n1=np.sum(np.asarray(t1)>=t); n0=np.sum(np.asarray(t0)>=t); n=n1+n0
        d1=np.sum((np.asarray(t1)==t)&(np.asarray(e1)==1)); d0=np.sum((np.asarray(t0)==t)&(np.asarray(e0)==1)); d=d1+d0
        oe+=d1-d*n1/n
        if n>1: var+=n1*n0*d*(n-d)/(n*n*(n-1))
    return oe*oe/var if var>0 else 0.0
time=np.array([2,3,4,4,5,7],float); event=np.array([1,0,1,1,0,1])
km_t,km_s,nrisk,deaths=kaplan_meier(time,event)
t1=np.array([2,4,5,7,8],float); e1=np.array([1,1,0,1,0])
t0=np.array([3,6,7,9,10],float); e0=np.array([1,1,0,1,0])
stat=logrank(t1,e1,t0,e0)

# ---- Use it ----
from scipy.stats import chi2
pvalue=chi2.sf(stat,df=1)

# ---- Verify it ----
assert np.allclose(km_t,[2,4,7])
assert np.allclose(km_s,[5/6,5/12,0])
assert np.array_equal(nrisk,[6,4,1])
assert np.all(np.diff(km_s)<=0)
assert abs(logrank(t1,e1,t0,e0)-logrank(t0,e0,t1,e1))<1e-12
assert logrank(t1,e1,t1,e1)==0
assert 0<=pvalue<=1
# Censoring without an event does not create a KM step.
assert 3 not in km_t and 5 not in km_t
