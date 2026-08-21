import numpy as np
rng=np.random.default_rng(7)
X=np.array([[0,0],[0,1],[1,0],[1,1],[2,0],[2,1],[3,0],[3,1]],float); y=np.array([0,0,0,1,0,1,1,1])
def fit_stump(X,y,features):
    best=(-1,None,None,None,None)
    for j in features:
        vals=np.unique(X[:,j])
        for t in (vals[:-1]+vals[1:])/2:
            left=X[:,j]<=t
            if left.all() or (~left).all(): continue
            lv=np.bincount(y[left],minlength=2).argmax(); rv=np.bincount(y[~left],minlength=2).argmax()
            pred=np.where(left,lv,rv); acc=(pred==y).mean()
            if acc>best[0]: best=(acc,j,float(t),int(lv),int(rv))
    if best[1] is None:
        value=int(np.bincount(y,minlength=2).argmax()); return (int(features[0]),float('inf'),value,value)
    return best[1:]
def pred_stump(X,s):
    j,t,lv,rv=s; return np.where(X[:,j]<=t,lv,rv)
stumps=[]; bootstraps=[]
for _ in range(101):
    idx=rng.integers(0,len(X),len(X)); feature=[int(rng.integers(0,X.shape[1]))]
    bootstraps.append(tuple(idx)); stumps.append(fit_stump(X[idx],y[idx],feature))
votes=np.array([pred_stump(X,s) for s in stumps]); scratch_pred=(votes.mean(axis=0)>=0.5).astype(int)
