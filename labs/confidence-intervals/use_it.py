import math
import random

def mean(xs): return sum(xs) / len(xs)
def sd(xs):
    m = mean(xs)
    return math.sqrt(sum((x-m)**2 for x in xs)/(len(xs)-1))

def z_interval(xs, critical=1.96):
    m = mean(xs); se = sd(xs)/math.sqrt(len(xs))
    return m-critical*se, m+critical*se

rng = random.Random(11)
mu = 3.0
intervals = [z_interval([rng.gauss(mu, 2.0) for _ in range(80)]) for _ in range(3000)]

# ---- Use it ----
import numpy as np
from scipy.stats import t
rng_np = np.random.default_rng(11)
x = rng_np.normal(mu, 2.0, size=80)
se = x.std(ddof=1)/np.sqrt(x.size)
critical = t.ppf(0.975, df=x.size-1)
scipy_interval = (x.mean()-critical*se, x.mean()+critical*se)
