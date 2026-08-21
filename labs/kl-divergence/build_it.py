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
