import numpy as np
rng=np.random.default_rng(0)
X=np.r_[rng.normal([-2,0],[.7,.5],(200,2)),rng.normal([2,1],[.8,.7],(250,2))]

# ---- Use it ----
from sklearn.mixture import GaussianMixture
g=GaussianMixture(n_components=2,random_state=0).fit(X)
P=g.predict_proba(X)
print(P[:5],g.means_)
