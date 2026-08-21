import numpy as np
from scipy.optimize import minimize
rng=np.random.default_rng(77); pre=35; post=12; time=np.arange(pre+post); factors=np.c_[np.ones(len(time)),np.sin(time/5),time/20]; load=rng.normal(size=(3,4)); donors=factors@load+rng.normal(scale=.03,size=(len(time),4)); true_w=np.array([.5,.3,.2,0.]); counterfactual=donors@true_w; effect=np.r_[np.zeros(pre),np.full(post,-4.)]; treated=counterfactual+effect+rng.normal(scale=.03,size=len(time))
def objective(w): return np.mean((treated[:pre]-donors[:pre]@w)**2)
fit=minimize(objective,np.full(4,.25),method='SLSQP',bounds=[(0,1)]*4,constraints={'type':'eq','fun':lambda w:w.sum()-1}); weights=fit.x; synthetic=donors@weights; gaps=treated-synthetic

# ---- Use it ----
pre_rmspe=np.sqrt(np.mean(gaps[:pre]**2)); post_effect=np.mean(gaps[pre:]); concentration=np.sum(weights**2); frozen_prediction=donors[pre:]@weights
