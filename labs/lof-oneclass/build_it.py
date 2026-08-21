import numpy as np
def lof_scores(X,k=10):
    X=np.asarray(X,float); dist=np.sqrt(((X[:,None,:]-X[None,:,:])**2).sum(2))
    np.fill_diagonal(dist,np.inf)
    neighbors=np.argsort(dist,axis=1)[:,:k]
    kdist=np.take_along_axis(dist,neighbors[:,-1:],axis=1).ravel()
    reach=np.empty((len(X),k))
    for i in range(len(X)):
        js=neighbors[i]; reach[i]=np.maximum(kdist[js],dist[i,js])
    lrd=1/np.maximum(reach.mean(1),1e-12)
    lof=np.array([lrd[neighbors[i]].mean()/lrd[i] for i in range(len(X))])
    return lof
rng=np.random.default_rng(8)
dense=rng.normal([0,0],[.18,.18],size=(60,2))
sparse=rng.normal([4,4],[.55,.55],size=(35,2))
X=np.vstack([dense,sparse,[[4,7]]])
lof=lof_scores(X,k=12)
