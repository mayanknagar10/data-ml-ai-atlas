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
