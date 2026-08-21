import numpy as np
def huber_irls(X,y,epsilon=1.35,steps=100,tol=1e-10):
    D=np.column_stack([np.ones(len(X)),np.asarray(X,float)])
    y=np.asarray(y,float); b=np.linalg.lstsq(D,y,rcond=None)[0]
    for _ in range(steps):
        r=y-D@b; center=np.median(r)
        scale=max(1.4826*np.median(np.abs(r-center)),1e-8)
        u=np.abs(r)/scale; w=np.ones_like(u)
        mask=u>epsilon; w[mask]=epsilon/u[mask]
        new=np.linalg.lstsq(D*np.sqrt(w[:,None]),y*np.sqrt(w),rcond=None)[0]
        if np.max(np.abs(new-b))<tol: b=new; break
        b=new
    return b,w,scale
x=np.linspace(0,10,31); y=1+2*x+0.15*np.sin(x)
y_bad=y.copy(); y_bad[27]+=60
b,w,scale=huber_irls(x[:,None],y_bad)
D=np.column_stack([np.ones(len(x)),x])
ols=np.linalg.lstsq(D,y_bad,rcond=None)[0]

# ---- Use it ----
from sklearn.linear_model import HuberRegressor
sk=HuberRegressor(epsilon=1.35,alpha=0,max_iter=1000,tol=1e-10).fit(x[:,None],y_bad)
sk_b=np.r_[sk.intercept_,sk.coef_]

# ---- Verify it ----
assert abs(b[1]-2)<abs(ols[1]-2)
assert abs(sk_b[1]-2)<abs(ols[1]-2)
assert w[27]==w.min() and w[27]<0.1
# Bounded response sensitivity compared with OLS.
y_worse=y_bad.copy(); y_worse[27]+=600
b2,_,_=huber_irls(x[:,None],y_worse)
ols2=np.linalg.lstsq(D,y_worse,rcond=None)[0]
assert abs(b2[1]-b[1])<0.05*abs(ols2[1]-ols[1])
perm=np.random.default_rng(3).permutation(len(x))
bp,_,_=huber_irls(x[perm,None],y_bad[perm])
assert np.allclose(bp,b,atol=1e-7)
assert np.isfinite(scale)
