def weighted_moments(values,probs):
    if abs(sum(probs)-1)>1e-12: raise ValueError('weights must sum to one')
    mean=sum(x*p for x,p in zip(values,probs))
    variance=sum((x-mean)**2*p for x,p in zip(values,probs))
    return mean,variance

def summary(values):
    n=0; mean=0.0; m2=0.0
    for x in values:
        n+=1; delta=x-mean; mean+=delta/n; m2+=delta*(x-mean)
    return n,mean,m2

def merge(a,b):
    n1,m1,s1=a; n2,m2,s2=b
    if n1==0:return b
    if n2==0:return a
    d=m2-m1; n=n1+n2
    return n,m1+d*n2/n,s1+s2+d*d*n1*n2/n

# ---- Use it ----
import numpy as np
values=[1.,2.,4.]; probs=[.2,.3,.5]; exact=weighted_moments(values,probs)
data=np.array([1e9+1,1e9+2,1e9+4,1e9+8],dtype=float)
combined=merge(summary(data[:2]),summary(data[2:]))
x=np.array([1.,2.,3.]); y=np.array([2.,4.,8.])
