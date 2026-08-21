import math

def mean(xs): return sum(xs)/len(xs)
def variance(xs):
    m=mean(xs); return sum((x-m)**2 for x in xs)/(len(xs)-1)
def standardized_effect(a,b):
    n1,n0=len(a),len(b); v1,v0=variance(a),variance(b)
    pooled=math.sqrt(((n1-1)*v1+(n0-1)*v0)/(n1+n0-2))
    d=(mean(a)-mean(b))/pooled
    correction=1-3/(4*(n1+n0)-9)
    return mean(a)-mean(b),d,correction*d
a=[14,15,13,17,16,18,15,16]; b=[10,12,11,13,9,14,12,11]
raw,d,g=standardized_effect(a,b)
