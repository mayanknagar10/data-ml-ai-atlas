import numpy as np
from sklearn.linear_model import LinearRegression
rng=np.random.default_rng(66); n=30000; r=rng.uniform(-2,2,size=n); treatment=(r>=0).astype(float); tau=3.; y=1+1.5*r+.5*r*r+tau*treatment+rng.normal(scale=.8,size=n)
def local_rd(h):
    keep=np.abs(r)<=h; rr=r[keep]; aa=treatment[keep]; yy=y[keep]; X=np.c_[aa,rr,aa*rr]; weights=np.maximum(1-np.abs(rr)/h,0); model=LinearRegression().fit(X,yy,sample_weight=weights); return model.coef_[0],keep.sum()
estimate,n_local=local_rd(.5)

# ---- Use it ----
nearby={h:local_rd(h)[0] for h in (.35,.5,.7)}; left=y[(r<0)&(r>-.05)].mean(); right=y[(r>=0)&(r<.05)].mean(); raw_near_jump=right-left

# ---- Verify it ----
assert abs(estimate-tau)<.08
assert all(abs(v-tau)<.12 for v in nearby.values())
assert abs(raw_near_jump-tau)<.15
assert n_local>7000
assert set(nearby)=={.35,.5,.7}
