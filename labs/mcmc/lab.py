import math
import random

def log_beta_kernel(p,a,b):
    if not 0 < p < 1: return float('-inf')
    return (a-1)*math.log(p)+(b-1)*math.log1p(-p)
def metropolis(start,a,b,steps,proposal_sd,seed):
    rng=random.Random(seed); x=start; out=[]; accepted=0
    logp=log_beta_kernel(x,a,b)
    for _ in range(steps):
        candidate=x+rng.gauss(0,proposal_sd)
        logc=log_beta_kernel(candidate,a,b)
        if math.log(rng.random()) < min(0.0,logc-logp):
            x,logp=candidate,logc; accepted+=1
        out.append(x)
    return out,accepted/steps
chains=[metropolis(s,8,22,30000,0.08,seed) for s,seed in [(0.05,1),(0.2,2),(0.6,3),(0.9,4)]]
retained=[draws[5000:] for draws,_ in chains]

# ---- Use it ----
import numpy as np
from scipy.stats import beta
combined=np.concatenate([np.asarray(c) for c in retained])
analytic_mean=beta.mean(8,22)
analytic_q=beta.ppf([0.025,0.975],8,22)

# ---- Verify it ----
assert abs(combined.mean()-analytic_mean) < 0.01
assert np.allclose(np.quantile(combined,[0.025,0.975]),analytic_q,atol=0.02)
chain_means=[np.mean(c) for c in retained]
assert max(chain_means)-min(chain_means) < 0.02
assert all(0.15 < rate < 0.85 for _,rate in chains)
assert all(len(c)==25000 for c in retained)
