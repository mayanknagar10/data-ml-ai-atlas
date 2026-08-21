import numpy as np
rng=np.random.default_rng(23); data=rng.normal(size=(600,8)); queries=rng.normal(size=(30,8))
def exact_search(data,queries,k):
    dist=((queries[:,None,:]-data[None,:,:])**2).sum(axis=2); ids=np.argsort(dist,axis=1)[:,:k]
    return ids,np.take_along_axis(dist,ids,axis=1)
def lloyd(data,nlist,steps=20):
    centers=data[np.linspace(0,len(data)-1,nlist,dtype=int)].copy()
    for _ in range(steps):
        labels=((data[:,None,:]-centers[None,:,:])**2).sum(2).argmin(1)
        updated=np.array([data[labels==j].mean(0) if np.any(labels==j) else centers[j] for j in range(nlist)])
        if np.allclose(updated,centers): break
        centers=updated
    return centers,labels
def ivf_search(data,queries,centers,labels,k,nprobe):
    result=[]
    for q in queries:
        probes=np.argsort(((centers-q)**2).sum(1))[:nprobe]; candidates=np.flatnonzero(np.isin(labels,probes))
        local=np.argsort(((data[candidates]-q)**2).sum(1))[:k]; result.append(candidates[local])
    return np.asarray(result)
def recall(exact,approx): return np.mean([len(set(a)&set(e))/len(e) for e,a in zip(exact,approx)])
K=10; nlist=12; exact_ids,exact_dist=exact_search(data,queries,K); centers,labels=lloyd(data,nlist)
approx1=ivf_search(data,queries,centers,labels,K,1); approx4=ivf_search(data,queries,centers,labels,K,4); approx_all=ivf_search(data,queries,centers,labels,K,nlist)

# ---- Use it ----
from sklearn.neighbors import NearestNeighbors
nn=NearestNeighbors(n_neighbors=K,metric='euclidean').fit(data); sk_dist,sk_ids=nn.kneighbors(queries)
r1,r4,rall=recall(exact_ids,approx1),recall(exact_ids,approx4),recall(exact_ids,approx_all)

# ---- Verify it ----
assert np.array_equal(sk_ids,exact_ids)
assert np.allclose(sk_dist**2,exact_dist)
assert 0<=r1<=r4<=rall<=1 and rall==1.0
assert np.array_equal(approx_all,exact_ids)
assert np.all(np.diff(exact_dist,axis=1)>=0)
assert set(labels)==set(range(nlist))
# Search budget changes candidates, never the metric or exact oracle.
assert approx1.shape==approx4.shape==exact_ids.shape
