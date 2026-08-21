import numpy as np
rng=np.random.default_rng(0)
X=rng.normal(size=(1000,32)); X/=np.linalg.norm(X,axis=1,keepdims=True)
q=X[123]+.01*rng.normal(size=32); q/=np.linalg.norm(q)

# ---- Use it ----
from sklearn.neighbors import NearestNeighbors
nn=NearestNeighbors(n_neighbors=5,metric='cosine').fit(X)
dist,idx=nn.kneighbors(q.reshape(1,-1))
print(idx[0],dist[0])

# ---- Verify it ----
assert 123 in idx[0]
