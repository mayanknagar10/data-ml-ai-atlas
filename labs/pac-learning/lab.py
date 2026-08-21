import math
import numpy as np
def realizable_bound(class_size,epsilon,delta):
    if class_size<1 or not 0<epsilon<1 or not 0<delta<1: raise ValueError('invalid PAC inputs')
    return math.ceil((math.log(class_size)+math.log(1/delta))/epsilon)
def learn_threshold(x,y,candidates):
    errors=[np.mean((x>=t).astype(int)!=y) for t in candidates]; return candidates[int(np.argmin(errors))]
rng=np.random.default_rng(12); candidates=np.linspace(0,1,101); target=.6; epsilon=.1; delta=.05; n=realizable_bound(len(candidates),epsilon,delta)
failures=0; trials=500
for _ in range(trials):
    x=rng.uniform(size=n); y=(x>=target).astype(int); t=learn_threshold(x,y,candidates); failures+=abs(t-target)>epsilon
failure_rate=failures/trials

# ---- Use it ----
from scipy.stats import beta
# A conservative beta-binomial interval summarizes observed simulation uncertainty.
upper_failure=float(beta.ppf(.975,failures+1,trials-failures+1))

# ---- Verify it ----
assert n==math.ceil((math.log(101)+math.log(20))/.1)
assert failure_rate<=delta and upper_failure<.08
assert realizable_bound(1000,.05,.01)==math.ceil((math.log(1000)+math.log(100))/.05)
assert realizable_bound(1000,.025,.01)>realizable_bound(1000,.05,.01)
assert realizable_bound(1000,.05,.001)>realizable_bound(1000,.05,.01)
assert realizable_bound(10000,.05,.01)>realizable_bound(1000,.05,.01)
try:
    realizable_bound(0,.1,.1)
    raise AssertionError('expected invalid class')
except ValueError:
    pass
