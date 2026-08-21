import numpy as np
def harrell_c(time,event,risk):
    time=np.asarray(time,float); event=np.asarray(event,int); risk=np.asarray(risk,float)
    good=ties=total=0.0
    for i in range(len(time)):
        if event[i]!=1: continue
        for j in range(len(time)):
            if time[i]<time[j]:
                total+=1; good+=risk[i]>risk[j]; ties+=risk[i]==risk[j]
    if total==0: raise ValueError('no comparable pairs')
    return (good+0.5*ties)/total
def censor_km(time,event):
    time=np.asarray(time,float); censor=1-np.asarray(event,int); ts=np.unique(time[censor==1]); s=1.0; vals=[]
    for t in ts:
        n=np.sum(time>=t); d=np.sum((time==t)&(censor==1)); s*=1-d/n; vals.append(s)
    return ts,np.asarray(vals)
def g_at(q,ts,vals,left=False):
    keep=ts<q if left else ts<=q
    return 1.0 if not np.any(keep) else float(vals[np.flatnonzero(keep)[-1]])
def ipcw_brier(time,event,surv,tau):
    time=np.asarray(time,float); event=np.asarray(event,int); surv=np.asarray(surv,float); ts,g=censor_km(time,event); total=0.0
    for ti,di,si in zip(time,event,surv):
        if di==1 and ti<=tau: total+=si**2/g_at(ti,ts,g,left=True)
        elif ti>tau: total+=(1-si)**2/g_at(tau,ts,g)
    return total/len(time)
time=np.array([2,3,5,6,7,9,10,12],float); event=np.array([1,0,1,1,0,1,0,1]); risk=-time
surv6=np.array([.15,.35,.45,.55,.65,.75,.82,.90])
c_index=harrell_c(time,event,risk); bs6=ipcw_brier(time,event,surv6,6)
