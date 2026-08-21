import numpy as np
def aalen_johansen(time,status,causes=(1,2)):
    time=np.asarray(time,float); status=np.asarray(status,int); causes=tuple(causes)
    ts=np.unique(time[status>0]); s=1.0; cif=np.zeros(len(causes)); surv=[]; cifs=[]
    for t in ts:
        n=np.sum(time>=t); d_all=np.sum((time==t)&(status>0)); prev=s
        for k,cause in enumerate(causes): cif[k]+=prev*np.sum((time==t)&(status==cause))/n
        s*=1-d_all/n; surv.append(s); cifs.append(cif.copy())
    return ts,np.asarray(surv),np.asarray(cifs)
def naive_one_minus_km(time,status,cause):
    time=np.asarray(time,float); status=np.asarray(status,int); s=1.0; vals=[]; ts=np.unique(time[status==cause])
    for t in ts:
        n=np.sum(time>=t); d=np.sum((time==t)&(status==cause)); s*=1-d/n; vals.append(1-s)
    return ts,np.asarray(vals)
time=np.arange(1,9,dtype=float); status=np.array([1,2,0,1,2,1,0,2])
ts,s,cif=aalen_johansen(time,status); naive_t,naive1=naive_one_minus_km(time,status,1)

# ---- Use it ----
# NumPy indexing produces a coherent fixed-horizon report from the step functions.
horizon=6.0
row=np.searchsorted(ts,horizon,side='right')-1
report={'event_free':float(s[row]),'cause_1':float(cif[row,0]),'cause_2':float(cif[row,1])}

# ---- Verify it ----
assert np.allclose(s+cif.sum(axis=1),1.0)
assert np.all(np.diff(s)<=1e-12) and np.all(np.diff(cif,axis=0)>=-1e-12)
assert naive1[-1]>=cif[-1,0] and naive1[-1]>cif[-1,0]
ts2,s2,swapped=aalen_johansen(time,np.where(status==1,2,np.where(status==2,1,0)))
assert np.array_equal(ts,ts2) and np.allclose(s,s2)
assert np.allclose(cif[:,0],swapped[:,1]) and np.allclose(cif[:,1],swapped[:,0])
assert abs(sum(report.values())-1)<1e-12
assert all(0<=v<=1 for v in report.values())
