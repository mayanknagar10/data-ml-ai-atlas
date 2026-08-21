import numpy as np
X=np.arange(10,dtype=float); y=np.array([-1,-1,1,1,-1,-1,1,1,1,1])
def best_stump(x,y,w):
    best=None
    for t in (np.unique(x)[:-1]+np.unique(x)[1:])/2:
        for polarity in (1,-1):
            pred=np.where(x<=t,-1,1)*polarity; err=float(w[pred!=y].sum())
            if best is None or err<best[0]: best=(err,float(t),polarity,pred)
    return best
w=np.full(len(y),1/len(y)); learners=[]; weight_sums=[]
for _ in range(8):
    err,t,p,base_pred=best_stump(X,y,w); err=np.clip(err,1e-12,1-1e-12); alpha=.5*np.log((1-err)/err)
    learners.append((t,p,float(alpha))); w*=np.exp(-alpha*y*base_pred); w/=w.sum(); weight_sums.append(float(w.sum()))
def score(q):
    return sum(a*(np.where(np.asarray(q)<=t,-1,1)*p) for t,p,a in learners)
scratch_pred=np.where(score(X)>=0,1,-1)

# ---- Use it ----
from sklearn.ensemble import AdaBoostClassifier
from sklearn.tree import DecisionTreeClassifier
model=AdaBoostClassifier(estimator=DecisionTreeClassifier(max_depth=1,random_state=0),n_estimators=8,learning_rate=1.0,algorithm='SAMME',random_state=0).fit(X[:,None],(y==1).astype(int))
sk_pred=np.where(model.predict(X[:,None])==1,1,-1)

# ---- Verify it ----
assert all(abs(s-1)<1e-12 for s in weight_sums)
assert all(np.isfinite(a) for _,_,a in learners)
assert (scratch_pred==y).mean()>=0.9
assert (sk_pred==y).mean()>=0.9
assert np.unique(scratch_pred).size==2
assert np.isfinite(score(X)).all()
