import numpy as np
prior_mean=0.; prior_var=4.; obs_var=1.; y=np.array([1.2,.8,1.1,.9])
post_var=1/(1/prior_var+len(y)/obs_var)
post_mean=post_var*(prior_mean/prior_var+y.sum()/obs_var)
