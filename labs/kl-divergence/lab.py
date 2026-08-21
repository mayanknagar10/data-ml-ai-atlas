import numpy as np
def probability(v):
    p=np.asarray(v,float);
    if np.any(p<0) or p.sum()<=0: raise ValueError('invalid weights')
    return p/p.sum()
def kl(p,q):
    p=probability(p); q=probability(q)
    if np.any((p>0)&(q==0)): return float('inf')
    keep=p>0; return float(np.sum(p[keep]*np.log(p[keep]/q[keep])))
def entropy(p):
    p=probability(p); keep=p>0; return float(-np.sum(p[keep]*np.log(p[keep])))
def cross_entropy(p,q):
    p=probability(p); q=probability(q)
    if np.any((p>0)&(q==0)): return float('inf')
    keep=p>0; return float(-np.sum(p[keep]*np.log(q[keep])))
p=np.array([.9,.1]); q=np.array([.5,.5]); forward=kl(p,q); reverse=kl(q,p)
p2=np.array([.6,.4]); q2=np.array([.7,.3]); product_p=np.outer(p,p2).ravel(); product_q=np.outer(q,q2).ravel()

# ---- Use it ----
from scipy.stats import entropy as scipy_entropy
scipy_forward=float(scipy_entropy(p,q))

# ---- Verify it ----
assert forward>=0 and reverse>=0 and forward!=reverse
assert abs(forward-scipy_forward)<1e-12
assert abs(cross_entropy(p,q)-(entropy(p)+forward))<1e-12
assert abs(kl(product_p,product_q)-(kl(p,q)+kl(p2,q2)))<1e-12
assert kl(p,p)==0.0
assert np.isinf(kl([.5,.5],[1,0]))
assert kl([0,1],[.2,.8])>=0
# Consistent rescaling of weights does not change normalized distributions.
assert abs(kl(10*p,3*q)-forward)<1e-12
