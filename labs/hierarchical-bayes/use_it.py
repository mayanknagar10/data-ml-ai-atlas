def normal_partial_pool(observed,se,mu,tau):
    local_var=se*se; group_var=tau*tau
    posterior_var=1/(1/local_var+1/group_var)
    posterior_mean=posterior_var*(observed/local_var+mu/group_var)
    weight=group_var/(group_var+local_var)
    return posterior_mean,posterior_var,weight

observed=[0.50,0.20,-0.40]; ses=[0.50,0.10,0.60]
results=[normal_partial_pool(y,se,0.10,0.20) for y,se in zip(observed,ses)]

# ---- Use it ----
import numpy as np
pooled=np.asarray([r[0] for r in results])
weights=np.asarray([r[2] for r in results])
# Equivalent PyMC structure:
# with pm.Model():
#   mu=pm.Normal('mu',0,1); tau=pm.HalfNormal('tau',0.5)
#   z=pm.Normal('z',0,1,shape=3); theta=mu+tau*z
#   y=pm.Normal('y',theta,sigma=ses,observed=observed)
