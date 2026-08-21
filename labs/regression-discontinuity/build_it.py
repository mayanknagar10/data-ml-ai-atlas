import numpy as np
from sklearn.linear_model import LinearRegression
rng=np.random.default_rng(66); n=30000; r=rng.uniform(-2,2,size=n); treatment=(r>=0).astype(float); tau=3.; y=1+1.5*r+.5*r*r+tau*treatment+rng.normal(scale=.8,size=n)
def local_rd(h):
    keep=np.abs(r)<=h; rr=r[keep]; aa=treatment[keep]; yy=y[keep]; X=np.c_[aa,rr,aa*rr]; weights=np.maximum(1-np.abs(rr)/h,0); model=LinearRegression().fit(X,yy,sample_weight=weights); return model.coef_[0],keep.sum()
estimate,n_local=local_rd(.5)
