import itertools
import numpy as np
def threshold_patterns(points):
    x=np.sort(np.asarray(points,float)); cuts=[x[0]-1,*((x[:-1]+x[1:])/2),x[-1]+1]
    return {tuple((x>=t).astype(int)) for t in cuts}
def interval_patterns(points):
    x=np.sort(np.asarray(points,float)); patterns={tuple(np.zeros(len(x),dtype=int))}
    for i in range(len(x)):
        for j in range(i,len(x)): patterns.add(tuple(((x>=x[i])&(x<=x[j])).astype(int)))
    return patterns
def shatters(patterns,m): return len(patterns)==2**m
t1=threshold_patterns([0]); t2=threshold_patterns([0,1]); i2=interval_patterns([0,1]); i3=interval_patterns([0,1,2])

# ---- Use it ----
from scipy.special import comb
def sauer(m,d): return int(sum(comb(m,i,exact=True) for i in range(d+1)))
interval_growth=[len(interval_patterns(range(m))) for m in range(1,7)]

# ---- Verify it ----
assert shatters(t1,1) and not shatters(t2,2)
assert shatters(i2,2) and not shatters(i3,3)
assert (1,0,1) not in i3 and len(i3)==7
assert len(t2)==3==sauer(2,1)
assert interval_growth==[2,4,7,11,16,22]
assert all(interval_growth[m-1]<=sauer(m,2) for m in range(2,7))
assert sauer(3,2)==7 and sauer(5,2)==16
# Relabeling point coordinates without changing order preserves one-dimensional patterns.
assert interval_patterns([10,20,40])==i3
