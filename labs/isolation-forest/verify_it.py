import numpy as np
rng=np.random.default_rng(0)
normal=rng.normal(0,1,(500,2)); out=rng.normal(7,.3,(12,2)); X=np.vstack([normal,out])

# ---- Use it ----
from sklearn.ensemble import IsolationForest
m=IsolationForest(contamination=.03,random_state=0).fit(X)
score=-m.score_samples(X)
idx=np.argsort(-score)[:15]
print(idx)

# ---- Verify it ----
assert (idx>=500).sum() >= 8
