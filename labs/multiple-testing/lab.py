def adjust_bh(pvalues):
    m=len(pvalues); order=sorted(range(m),key=pvalues.__getitem__)
    raw=[m*pvalues[i]/rank for rank,i in enumerate(order,1)]
    monotone=[0.0]*m; running=1.0
    for pos in range(m-1,-1,-1):
        running=min(running,raw[pos],1.0); monotone[pos]=running
    out=[0.0]*m
    for pos,i in enumerate(order): out[i]=monotone[pos]
    return out

def adjust_holm(pvalues):
    m=len(pvalues); order=sorted(range(m),key=pvalues.__getitem__)
    out=[0.0]*m; running=0.0
    for rank,i in enumerate(order):
        running=max(running,min(1.0,(m-rank)*pvalues[i])); out[i]=running
    return out

p=[0.001,0.006,0.011,0.020,0.031,0.070,0.20,0.42,0.60,0.90]
bh=adjust_bh(p); holm=adjust_holm(p)

# ---- Use it ----
import numpy as np
from scipy.stats import false_discovery_control
scipy_bh=false_discovery_control(np.asarray(p),method='bh')

# ---- Verify it ----
assert all(0 <= x <= 1 for x in bh+holm)
order=sorted(range(len(p)),key=p.__getitem__)
assert all(bh[order[i]] <= bh[order[i+1]] for i in range(len(p)-1))
assert all(holm[i] >= min(1.0,p[i]) for i in range(len(p)))
assert np.allclose(bh,scipy_bh)
