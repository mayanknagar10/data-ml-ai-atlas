import numpy as np
from sklearn.linear_model import LinearRegression
rng=np.random.default_rng(44); units=5000; group=rng.binomial(1,.5,size=units); base=3+2*group+rng.normal(size=units); effect=2.5
y_pre=base+rng.normal(scale=.5,size=units); y_post=base+1.2+effect*group+rng.normal(scale=.5,size=units)
did=(y_post[group==1].mean()-y_pre[group==1].mean())-(y_post[group==0].mean()-y_pre[group==0].mean())
y=np.r_[y_pre,y_post]; g=np.r_[group,group]; post=np.r_[np.zeros(units),np.ones(units)]; X=np.c_[g,post,g*post]; regression=LinearRegression().fit(X,y); interaction=regression.coef_[2]

# ---- Use it ----
changes=y_post-y_pre; direct=changes[group==1].mean()-changes[group==0].mean(); placebo_pre_gap=y_pre[group==1].mean()-y_pre[group==0].mean(); post_gap=y_post[group==1].mean()-y_post[group==0].mean()
