import random
import statistics

def beta_draw(a,b,rng): return rng.betavariate(a,b)
def predictive_counts(a,b,trials,repeats,seed):
    rng=random.Random(seed); counts=[]
    for _ in range(repeats):
        p=beta_draw(a,b,rng)
        counts.append(sum(rng.random()<p for _ in range(trials)))
    return counts

prior_counts=predictive_counts(2,8,20,5000,31)
# Six successes in twenty trials -> Beta(8,22).
posterior_counts=predictive_counts(8,22,20,5000,31)
observed=6

# ---- Use it ----
import numpy as np
from scipy.stats import betabinom
analytic_mean=betabinom.mean(20,8,22)
analytic_interval=betabinom.ppf([0.025,0.975],20,8,22)
posterior_array=np.asarray(posterior_counts)
