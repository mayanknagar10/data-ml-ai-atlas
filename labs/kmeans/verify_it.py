import numpy as np
X=np.array([[0,0],[0,1],[1,0],[8,8],[8,9],[9,8]],float)
def run_kmeans(X,k,seed,max_iter=50):
    rng=np.random.default_rng(seed); centers=X[rng.choice(len(X),k,replace=False)].copy(); history=[]
    for _ in range(max_iter):
        dist=((X[:,None,:]-centers[None,:,:])**2).sum(axis=2); labels=dist.argmin(axis=1); inertia=float(dist[np.arange(len(X)),labels].sum()); history.append(inertia)
        new=np.array([X[labels==j].mean(axis=0) if np.any(labels==j) else centers[j] for j in range(k)])
        if np.allclose(new,centers): centers=new; break
        centers=new
    dist=((X[:,None,:]-centers[None,:,:])**2).sum(axis=2); labels=dist.argmin(axis=1); history.append(float(dist[np.arange(len(X)),labels].sum()))
    return centers,labels,history
runs=[run_kmeans(X,2,s) for s in range(8)]; centers,labels,history=min(runs,key=lambda r:r[2][-1])

# ---- Use it ----
from sklearn.cluster import KMeans
model=KMeans(n_clusters=2,n_init=20,random_state=0).fit(X)
sk_inertia=float(model.inertia_)

# ---- Verify it ----
assert all(b<=a+1e-12 for a,b in zip(history,history[1:]))
for j in range(2): assert np.allclose(centers[j],X[labels==j].mean(axis=0))
assert abs(history[-1]-sk_inertia)<1e-10
assert set(np.bincount(labels))=={3}
perm=1-labels; assert sum(((X[perm==j]-centers[1-j])**2).sum() for j in range(2))==history[-1]
assert np.isfinite(centers).all()
