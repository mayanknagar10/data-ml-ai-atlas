import numpy as np
from math import erf,sqrt
def pvalue(x,y):
    n=len(x); effect=x.mean()-y.mean(); se=sqrt(x.var(ddof=1)/n+y.var(ddof=1)/n)
    z=effect/se; return 2*(1-0.5*(1+erf(abs(z)/sqrt(2))))
def simulate(rule,runs=3000,seed=7):
    rng=np.random.default_rng(seed); rejected=0; looks=(40,80,120,160,200)
    for _ in range(runs):
        x=rng.normal(size=looks[-1]); y=rng.normal(size=looks[-1])
        if any(pvalue(x[:n],y[:n])<=rule(len(looks),i) for i,n in enumerate(looks,1)):rejected+=1
    return rejected/runs
naive=simulate(lambda k,i:0.05)
controlled=simulate(lambda k,i:0.05/k)

# ---- Use it ----
from scipy.stats import norm
bonferroni_z=float(norm.ppf(1-0.05/(2*5)))
fixed_z=float(norm.ppf(1-0.05/2))

# ---- Verify it ----
assert naive>0.10
assert controlled<0.065
assert controlled>0
assert bonferroni_z>fixed_z
assert abs(simulate(lambda k,i:0.05,seed=7)-naive)<1e-12
assert 0<=naive<=1 and 0<=controlled<=1
