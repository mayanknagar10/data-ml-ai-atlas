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
