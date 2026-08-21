import numpy as np
from math import erf,exp,pi,sqrt
def kernel(a,b,length=0.18):
    a=np.asarray(a)[:,None]; b=np.asarray(b)[None,:]
    return np.exp(-0.5*((a-b)/length)**2)
def posterior(train_x,train_y,test_x,noise=1e-8):
    K=kernel(train_x,train_x)+noise*np.eye(len(train_x)); Ks=kernel(train_x,test_x)
    alpha=np.linalg.solve(K,train_y)
    mean=Ks.T@alpha
    cov=kernel(test_x,test_x)-Ks.T@np.linalg.solve(K,Ks)
    return mean,np.sqrt(np.maximum(0,np.diag(cov)))
def cdf(z): return 0.5*(1+erf(z/sqrt(2)))
def pdf(z): return exp(-0.5*z*z)/sqrt(2*pi)
def ei(mean,std,best):
    out=[]
    for m,s in zip(mean,std):
        if s<1e-12:out.append(0.0)
        else:
            z=(m-best)/s; out.append((m-best)*cdf(z)+s*pdf(z))
    return np.array(out)
objective=lambda x:np.sin(7*x)*(1-x)+0.6*x
grid=np.linspace(0,1,201); train_x=np.array([0.0,0.5,1.0]); train_y=objective(train_x)
initial_regret=float(objective(grid).max()-train_y.max())
for _ in range(6):
    mean,std=posterior(train_x,train_y,grid); acquisition=ei(mean,std,train_y.max())
    acquisition[np.isin(grid,train_x)]=-1
    x_next=grid[int(np.argmax(acquisition))]
    train_x=np.append(train_x,x_next); train_y=np.append(train_y,objective(x_next))
final_regret=float(objective(grid).max()-train_y.max())

# ---- Use it ----
from sklearn.gaussian_process import GaussianProcessRegressor
from sklearn.gaussian_process.kernels import RBF
gp=GaussianProcessRegressor(kernel=RBF(0.18),alpha=1e-8,optimizer=None,normalize_y=False).fit(train_x[:,None],train_y)
sk_mean,sk_std=gp.predict(grid[:,None],return_std=True)

# ---- Verify it ----
assert final_regret<initial_regret
assert len(set(np.round(train_x,12)))==len(train_x)
assert np.all(np.isfinite(sk_mean)) and np.all(sk_std>=0)
manual_mean,manual_std=posterior(train_x,train_y,grid)
assert np.max(np.abs(sk_mean-manual_mean))<1e-5
assert np.max(manual_std[np.isin(grid,train_x)])<2e-4
assert final_regret<0.03
