import numpy as np
n=6; edges=[(0,1),(0,2),(1,2),(2,0),(3,2),(3,4),(4,3)]
v=np.full(n,1/n); alpha=.85; P=np.zeros((n,n))
for source in range(n):
    targets=sorted({dst for src,dst in edges if src==source})
    if targets:
        for target in targets: P[target,source]=1/len(targets)
    else: P[:,source]=v
def power(matrix,teleport,tol=1e-13):
    rank=teleport.copy()
    for iteration in range(10000):
        new=alpha*(matrix@rank)+(1-alpha)*teleport
        if np.linalg.norm(new-rank,1)<tol: return new,iteration+1
        rank=new
    raise RuntimeError('did not converge')
rank,iterations=power(P,v)

# ---- Use it ----
direct=np.linalg.solve(np.eye(n)-alpha*P,(1-alpha)*v)
residual=np.linalg.norm(rank-alpha*(P@rank)-(1-alpha)*v,1)
order=np.argsort(-rank); top_nodes=order[:3].tolist()

# ---- Verify it ----
assert np.allclose(P.sum(axis=0),1) and np.all(P>=0)
assert np.all(rank>0) and abs(rank.sum()-1)<1e-12
assert residual<1e-11 and np.allclose(rank,direct,atol=1e-11) and iterations<1000
perm=np.array([2,0,5,1,4,3]); Pp=P[np.ix_(perm,perm)]; vp=v[perm]; rank_p,_=power(Pp,vp); assert np.allclose(rank_p,rank[perm],atol=1e-11)
# Node 5 is dangling yet keeps valid positive mass through teleportation.
assert rank[5]>0 and len(top_nodes)==3
