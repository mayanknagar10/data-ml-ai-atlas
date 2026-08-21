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
