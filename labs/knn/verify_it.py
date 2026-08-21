import numpy as np
X=np.array([[0,0],[0,2],[1,1],[8,8],[9,8],[8,10]],float); y=np.array([0,0,0,1,1,1])
def knn_predict(train_x,train_y,queries,k=3):
    out=[]; probs=[]
    for q in np.asarray(queries,float):
        dist=np.sqrt(np.sum((train_x-q)**2,axis=1)); idx=np.argsort(dist,kind='stable')[:k]
        w=1/np.maximum(dist[idx],1e-12); p=np.sum(w*train_y[idx])/np.sum(w)
        probs.append(p); out.append(int(p>=0.5))
    return np.array(out),np.array(probs)
scratch_pred,scratch_prob=knn_predict(X,y,X,k=3)

# ---- Use it ----
from sklearn.neighbors import KNeighborsClassifier
model=KNeighborsClassifier(n_neighbors=3,weights='distance').fit(X,y)
sk_pred=model.predict(X); sk_prob=model.predict_proba(X)[:,1]

# ---- Verify it ----
assert np.array_equal(scratch_pred,sk_pred)
assert np.allclose(scratch_prob,sk_prob)
assert np.array_equal(scratch_pred,y)
assert np.all((scratch_prob>=0)&(scratch_prob<=1))
q=np.array([[1,1000]],float); raw=np.argmin(np.linalg.norm(X-q,axis=1))
scale=np.array([5,1000.0]); scaled=np.argmin(np.linalg.norm(X/scale-q/scale,axis=1))
assert raw!=scaled
