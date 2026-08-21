import numpy as np
X=np.arange(12,dtype=float); y=np.array([0,0,1,1,2,2,5,5,7,8,8,9],float)
def fit_regression_stump(x,target):
    best=None
    for t in (np.unique(x)[:-1]+np.unique(x)[1:])/2:
        left=x<=t; lv=target[left].mean(); rv=target[~left].mean()
        pred=np.where(left,lv,rv); loss=np.mean((target-pred)**2)
        if best is None or loss<best[0]: best=(loss,float(t),float(lv),float(rv))
    return best[1:]
def stump_predict(x,s):
    t,lv,rv=s; return np.where(x<=t,lv,rv)
base=float(y.mean()); pred=np.full(len(y),base); rate=0.2; stumps=[]; losses=[float(np.mean((y-pred)**2))]
for _ in range(30):
    stump=fit_regression_stump(X,y-pred); update=stump_predict(X,stump)
    pred=pred+rate*update; stumps.append(stump); losses.append(float(np.mean((y-pred)**2)))
scratch_pred=pred.copy()
