import numpy as np
def fit_poisson_offset(X,y,exposure,steps=60,l2=1e-9):
    D=np.column_stack([np.ones(len(X)),np.asarray(X,float)])
    y=np.asarray(y,float); exposure=np.asarray(exposure,float)
    assert np.all(exposure>0) and np.all(y>=0)
    b=np.zeros(D.shape[1]); P=np.eye(D.shape[1]); P[0,0]=0
    for _ in range(steps):
        eta=np.clip(D@b+np.log(exposure),-25,25); mu=np.exp(eta)
        h=D.T@(mu[:,None]*D)+l2*P
        score=D.T@(y-mu)-l2*P@b
        step=np.linalg.solve(h,score); b+=step
        if np.max(np.abs(step))<1e-11: break
    return b,np.exp(D@b+np.log(exposure))
X=np.array([[-1],[-.5],[0],[.5],[1],[-1],[-.5],[0],[.5],[1]],float)
exposure=np.array([10,20,15,12,18,20,10,30,15,25],float)
y=np.array([1,2,2,3,6,2,1,4,4,8],float)
b,mu=fit_poisson_offset(X,y,exposure)

# ---- Use it ----
from sklearn.linear_model import PoissonRegressor
sk=PoissonRegressor(alpha=0,fit_intercept=True,max_iter=10000,tol=1e-12).fit(X,y/exposure,sample_weight=exposure)
sk_b=np.r_[sk.intercept_,sk.coef_]
sk_mu=sk.predict(X)*exposure

# ---- Verify it ----
assert np.all(mu>0)
assert np.allclose(b,sk_b,atol=2e-6)
assert np.allclose(mu,sk_mu,atol=2e-5)
D=np.column_stack([np.ones(len(X)),X])
assert np.allclose(D.T@(y-mu),0,atol=1e-7)
# Doubling exposure at the same covariates doubles expected count.
_,mu_double=fit_poisson_offset(X,y*2,exposure*2)
assert np.allclose(mu_double,2*mu,atol=2e-6)
perm=np.array([9,2,5,1,8,0,7,4,3,6])
bp,_=fit_poisson_offset(X[perm],y[perm],exposure[perm])
assert np.allclose(bp,b,atol=1e-8)
