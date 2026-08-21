import math

def mean(values): return sum(values)/len(values)

def interval(sample,z=1.96):
    m=mean(sample); variance=sum((x-m)**2 for x in sample)/(len(sample)-1); se=math.sqrt(variance/len(sample))
    return m-z*se,m+z*se

# ---- Use it ----
import numpy as np
rng=np.random.default_rng(20260821); reps=20000
means_25=rng.exponential(1.0,size=(reps,25)).mean(axis=1)
means_100=rng.exponential(1.0,size=(reps,100)).mean(axis=1)
# independent coverage experiment
samples=rng.exponential(1.0,size=(5000,100))
covered=np.mean([lo<=1.0<=hi for lo,hi in (interval(row) for row in samples)])
