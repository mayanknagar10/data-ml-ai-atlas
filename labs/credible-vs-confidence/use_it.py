import math

def wilson_interval(k,n,z=1.959963984540054):
    p=k/n; denom=1+z*z/n
    center=(p+z*z/(2*n))/denom
    half=z*math.sqrt(p*(1-p)/n+z*z/(4*n*n))/denom
    return center-half,center+half

k,n=3,10
wilson=wilson_interval(k,n)

# ---- Use it ----
import numpy as np
from scipy.stats import beta
credible=tuple(beta.ppf([0.025,0.975],4,8))
rng=np.random.default_rng(23)
true_p=0.30
counts=rng.binomial(n,true_p,size=20000)
credible_intervals=np.asarray([beta.ppf([0.025,0.975],1+c,1+n-c) for c in counts])
coverage=np.mean((credible_intervals[:,0] <= true_p) & (true_p <= credible_intervals[:,1]))
