import numpy as np
rng=np.random.default_rng(17); n=900; x=rng.uniform(-1,1,n); X=np.c_[np.ones(n),x]
beta_true=np.array([2.0,0.55]); rho_true=1.7; scale=np.exp(X@beta_true)
latent=scale*(-np.log(rng.uniform(size=n)))**(1/rho_true); censor=rng.exponential(12.0,n)
time=np.minimum(latent,censor); event=(latent<=censor).astype(int)
def weibull_aft_nll(params,X,time,event):
    beta=np.asarray(params[:-1]); rho=np.exp(params[-1]); logt=np.log(np.asarray(time)); logscale=X@beta; z=np.exp(rho*(logt-logscale))
    logf=np.log(rho)-rho*logscale+(rho-1)*logt-z; logs=-z
    return -np.sum(event*logf+(1-event)*logs)
def survival_curve(params,row,grid):
    rho=np.exp(params[-1]); lam=np.exp(np.asarray(row)@params[:-1]); return np.exp(-(np.asarray(grid)/lam)**rho)

# ---- Use it ----
from scipy.optimize import minimize
start=np.array([np.log(np.median(time)),0.0,0.0])
fit=minimize(weibull_aft_nll,start,args=(X,time,event),method='L-BFGS-B',bounds=[(None,None),(None,None),(-3,3)])
params=fit.x; beta_hat=params[:-1]; rho_hat=np.exp(params[-1])
fit_days2=minimize(weibull_aft_nll,start+np.array([np.log(2),0,0]),args=(X,2*time,event),method='L-BFGS-B',bounds=[(None,None),(None,None),(-3,3)])
grid=np.linspace(.1,20,100); s_low=survival_curve(params,[1,-1],grid); s_high=survival_curve(params,[1,1],grid)
