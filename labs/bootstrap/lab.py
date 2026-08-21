import random
import statistics

def bootstrap_statistic(xs, statistic, repeats=5000, seed=17):
    rng = random.Random(seed); n=len(xs)
    return [statistic(rng.choices(xs,k=n)) for _ in range(repeats)]

def percentile_interval(values, level=0.95):
    ys=sorted(values); tail=(1-level)/2
    lo=ys[int(tail*(len(ys)-1))]; hi=ys[int((1-tail)*(len(ys)-1))]
    return lo,hi

x=[8,9,10,10,11,12,13,17,22,30,31,35]
replicates=bootstrap_statistic(x,statistics.median)
interval=percentile_interval(replicates)

# ---- Use it ----
import numpy as np
from scipy.stats import bootstrap
rng=np.random.default_rng(17)
result=bootstrap((np.asarray(x),),np.median,confidence_level=0.95,n_resamples=5000,method='BCa',rng=rng)
scipy_interval=(float(result.confidence_interval.low),float(result.confidence_interval.high))

# ---- Verify it ----
assert bootstrap_statistic(x,statistics.median,100,17)==bootstrap_statistic(x,statistics.median,100,17)
assert interval[0] <= statistics.median(x) <= interval[1]
assert scipy_interval[0] < scipy_interval[1]
wide=percentile_interval(bootstrap_statistic(x*8,statistics.median,3000,19))
assert wide[1]-wide[0] <= interval[1]-interval[0]
