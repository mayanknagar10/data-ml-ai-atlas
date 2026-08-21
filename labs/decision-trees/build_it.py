import numpy as np
X=np.array([[0.1],[0.2],[0.4],[0.8],[0.9],[1.1]],float); y=np.array([0,0,0,1,1,1])
def gini(labels):
    if len(labels)==0: return 0.0
    p=np.bincount(labels,minlength=2)/len(labels)
    return float(1-np.sum(p*p))
def best_stump(X,y):
    parent=gini(y); best=None
    for j in range(X.shape[1]):
        vals=np.unique(X[:,j]); thresholds=(vals[:-1]+vals[1:])/2
        for t in thresholds:
            left=X[:,j]<=t; right=~left
            child=(left.mean()*gini(y[left])+right.mean()*gini(y[right]))
            candidate=(parent-child,j,float(t))
            if best is None or candidate[0]>best[0]: best=candidate
    gain,j,t=best; left=X[:,j]<=t
    values=(np.bincount(y[left],minlength=2).argmax(),np.bincount(y[~left],minlength=2).argmax())
    return {'gain':gain,'feature':j,'threshold':t,'values':values}
stump=best_stump(X,y)
def predict_stump(X,s): return np.where(X[:,s['feature']]<=s['threshold'],s['values'][0],s['values'][1])
scratch_pred=predict_stump(X,stump)
