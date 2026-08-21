import math
import numpy as np
def normalize(weights):
    p=np.asarray(weights,float);
    if p.ndim!=1 or np.any(p<0) or p.sum()<=0: raise ValueError('invalid probability weights')
    return p/p.sum()
def entropy(weights,base=2):
    p=normalize(weights); nz=p>0; return float(-np.sum(p[nz]*np.log(p[nz]))/np.log(base))
def information(probability,base=2):
    if not 0<probability<=1: raise ValueError('probability must be in (0,1]')
    return -math.log(probability,base)
p=np.array([.75,.25]); h_coin=entropy(p); surprises=np.array([information(v) for v in p])
uniform=np.ones(8)/8; deterministic=np.array([1,0,0]); joint=np.outer(p,[.6,.4]).ravel()
