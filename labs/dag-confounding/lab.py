import numpy as np
from sklearn.linear_model import LinearRegression
rng=np.random.default_rng(9); n=20000
c=rng.normal(size=n); a=.9*c+rng.normal(size=n); y=2*a+2*c+rng.normal(size=n)
naive=LinearRegression().fit(a[:,None],y).coef_[0]; adjusted=LinearRegression().fit(np.c_[a,c],y).coef_[0]
a2=rng.normal(size=n); y2=rng.normal(size=n); collider=a2+y2+rng.normal(scale=.3,size=n)
open_path=LinearRegression().fit(a2[:,None],y2).coef_[0]; conditioned=LinearRegression().fit(np.c_[a2,collider],y2).coef_[0]

# ---- Use it ----
confounder_bias=naive-2; adjusted_bias=adjusted-2; collider_bias=conditioned-open_path
results={'naive':naive,'adjusted':adjusted,'unconditioned_collider_graph':open_path,'conditioned_collider_graph':conditioned}

# ---- Verify it ----
assert abs(adjusted-2)<.03
assert abs(naive-2)>.5
assert abs(open_path)<.03
assert conditioned<-.8 and abs(collider_bias)>.8
assert all(np.isfinite(v) for v in results.values())
