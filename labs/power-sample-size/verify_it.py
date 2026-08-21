import math
from statistics import NormalDist

def n_per_arm_proportions(p0,p1,alpha=0.05,power=0.8):
    if not (0<p0<1 and 0<p1<1 and p0!=p1): raise ValueError('valid distinct probabilities required')
    z_alpha=NormalDist().inv_cdf(1-alpha/2)
    z_power=NormalDist().inv_cdf(power)
    pbar=(p0+p1)/2
    numerator=(z_alpha*math.sqrt(2*pbar*(1-pbar))+z_power*math.sqrt(p0*(1-p0)+p1*(1-p1)))**2
    return math.ceil(numerator/(p1-p0)**2)
n=n_per_arm_proportions(0.10,0.11)
n_smaller_effect=n_per_arm_proportions(0.10,0.105)

# ---- Use it ----
from statsmodels.stats.power import TTestIndPower
analysis=TTestIndPower()
t_n=analysis.solve_power(effect_size=0.30,alpha=0.05,power=0.80,ratio=1.0,alternative='two-sided')
t_power=analysis.power(effect_size=0.30,nobs1=t_n,alpha=0.05,ratio=1.0,alternative='two-sided')

# ---- Verify it ----
assert n > 0
assert n_smaller_effect > n
assert n_per_arm_proportions(0.10,0.12) < n
assert abs(t_power-0.80) < 1e-6
design_effect=1+(5-1)*0.20
assert design_effect == 1.8
