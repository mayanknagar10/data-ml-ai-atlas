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
