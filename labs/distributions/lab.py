import math

def binomial_pmf(k,n,p):
    if not (isinstance(k,int) and isinstance(n,int) and 0<=k<=n and 0<=p<=1): return 0.0
    return math.comb(n,k)*(p**k)*((1-p)**(n-k))

def moments(values,probs):
    mean=sum(x*p for x,p in zip(values,probs))
    variance=sum((x-mean)**2*p for x,p in zip(values,probs))
    return mean,variance

# ---- Use it ----
import numpy as np
from scipy.stats import binom
n=20; p=.1; values=list(range(n+1)); probs=[binomial_pmf(k,n,p) for k in values]
mean,variance=moments(values,probs)
rng=np.random.default_rng(20260821); samples=rng.binomial(n,p,size=100000)

# ---- Verify it ----
assert math.isclose(sum(probs),1.0,rel_tol=1e-12)
assert math.isclose(mean,n*p,rel_tol=1e-12)
assert math.isclose(variance,n*p*(1-p),rel_tol=1e-12)
assert np.allclose(probs,binom.pmf(values,n,p))
assert abs(samples.mean()-n*p)<.02
assert abs(samples.var()-n*p*(1-p))<.04
assert all(0<=x<=n for x in samples)
