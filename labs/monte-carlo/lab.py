import math

def summarize(values):
    n=len(values); mean=sum(values)/n; variance=sum((x-mean)**2 for x in values)/(n-1)
    return mean,math.sqrt(variance/n)

def antithetic_exp_uniform(u_values):
    # Estimate integral_0^1 exp(x) dx by paired average.
    return [(math.exp(u)+math.exp(1-u))/2 for u in u_values]

# ---- Use it ----
import numpy as np
seed=20260821; n=200000; rng=np.random.default_rng(seed); u=rng.random(n)
crude=np.exp(u); paired=np.array(antithetic_exp_uniform(u[:n//2]))
crude_est=summarize(crude.tolist()); anti_est=summarize(paired.tolist()); truth=math.e-1
children=np.random.SeedSequence(seed).spawn(2)
streams=[np.random.default_rng(child).random(5) for child in children]

# ---- Verify it ----
assert abs(crude_est[0]-truth)<4*crude_est[1]
assert abs(anti_est[0]-truth)<4*anti_est[1]
assert anti_est[1]<crude_est[1]
assert np.array_equal(np.random.default_rng(seed).random(n),u)
assert not np.array_equal(streams[0],streams[1])
assert math.isclose(summarize([1.,2.,3.])[0],2.0)
# SE ratio for fourfold independent size is approximately one half.
a=summarize(np.exp(u[:n//4]).tolist())[1]; b=summarize(np.exp(u).tolist())[1]
assert .45 < b/a < .55
