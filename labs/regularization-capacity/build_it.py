import numpy as np
rng=np.random.default_rng(19); X=rng.normal(size=(45,20)); true=np.r_[2,-1.5,.8,np.zeros(17)]; y=X@true+rng.normal(scale=1.5,size=45)
# Center to keep the intercept outside the penalty.
Xc=X-X.mean(0); yc=y-y.mean()
def ridge(X,y,lam): return np.linalg.solve(X.T@X+lam*np.eye(X.shape[1]),X.T@y)
def mse(y,p): return float(np.mean((y-p)**2))
def effective_df(X,lam):
    s=np.linalg.svd(X,compute_uv=False); return float(np.sum(s*s/(s*s+lam)))
lambdas=np.array([.01,.1,1,10,100]); coefs=[ridge(Xc,yc,l) for l in lambdas]; norms=np.array([np.linalg.norm(w) for w in coefs]); risks=np.array([mse(yc,Xc@w) for w in coefs]); dfs=np.array([effective_df(Xc,l) for l in lambdas])
