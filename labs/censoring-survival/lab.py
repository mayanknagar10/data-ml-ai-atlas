import numpy as np
def discrete_survival(pmf):
    pmf=np.asarray(pmf,float); assert np.all(pmf>=0) and pmf.sum()<=1+1e-12
    survival_before=1-np.r_[0,np.cumsum(pmf[:-1])]
    hazard=np.divide(pmf,survival_before,out=np.zeros_like(pmf),where=survival_before>0)
    survival_after=np.cumprod(1-hazard)
    return survival_before,hazard,survival_after
pmf=np.array([.10,.18,.144,.1152,.09216])
s_before,h,s_after=discrete_survival(pmf)
t=np.array([0.,1.,2.,3.]); rate=.2
S=np.exp(-rate*t); H=rate*t

# ---- Use it ----
from scipy.stats import expon
scipy_S=expon(scale=1/rate).sf(t)
scipy_h=np.full_like(t,rate)

# ---- Verify it ----
assert np.allclose(s_after,1-np.cumsum(pmf))
assert np.all((h>=0)&(h<=1))
assert np.all(np.diff(s_after)<=0)
assert np.allclose(S,scipy_S)
assert np.allclose(S,np.exp(-H))
assert np.allclose(scipy_h,rate)
assert abs(s_before[0]-1)<1e-12
assert abs((1-S[-1])-(1-np.exp(-rate*t[-1])))<1e-12
