import numpy as np
def soft(t,a): return np.sign(t)*max(abs(t)-a,0.0)
def ridge_fit(X,y,alpha):
    X=np.asarray(X,float); y=np.asarray(y,float)
    return np.linalg.solve(X.T@X+alpha*np.eye(X.shape[1]),X.T@y)
def lasso_cd(X,y,alpha,steps=5000,tol=1e-12):
    X=np.asarray(X,float); y=np.asarray(y,float); n,p=X.shape; b=np.zeros(p)
    old=np.inf
    for _ in range(steps):
        for j in range(p):
            r=y-X@b+X[:,j]*b[j]
            b[j]=soft((X[:,j]@r)/n,alpha)/((X[:,j]@X[:,j])/n)
        obj=np.mean((y-X@b)**2)/2+alpha*np.abs(b).sum()
        if abs(old-obj)<tol: break
        old=obj
    return b,obj
rng=np.random.default_rng(7)
X=rng.normal(size=(120,4)); X=(X-X.mean(0))/X.std(0)
y=2.5*X[:,0]-1.2*X[:,2]+rng.normal(scale=.25,size=120); y-=y.mean()
ridge_b=ridge_fit(X,y,alpha=12.0)
lasso_b,lasso_obj=lasso_cd(X,y,alpha=0.08)
