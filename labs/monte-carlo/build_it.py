import math

def summarize(values):
    n=len(values); mean=sum(values)/n; variance=sum((x-mean)**2 for x in values)/(n-1)
    return mean,math.sqrt(variance/n)

def antithetic_exp_uniform(u_values):
    # Estimate integral_0^1 exp(x) dx by paired average.
    return [(math.exp(u)+math.exp(1-u))/2 for u in u_values]
