import numpy as np
rng=np.random.default_rng(2); x=rng.normal(size=300); X=np.c_[x,2*x+rng.normal(0,.2,300)]
Xc=X-X.mean(0); cov=Xc.T@Xc/(len(X)-1)
vals,vecs=np.linalg.eigh(cov); order=np.argsort(vals)[::-1]
W=vecs[:,order[:1]]; Z=Xc@W
print('variance ratio',vals[order[0]]/vals.sum())

# ---- Use it ----
from sklearn.decomposition import PCA
p=PCA(n_components=1).fit(X)
print(p.explained_variance_ratio_)
