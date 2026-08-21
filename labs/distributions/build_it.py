import math

def binomial_pmf(k,n,p):
    if not (isinstance(k,int) and isinstance(n,int) and 0<=k<=n and 0<=p<=1): return 0.0
    return math.comb(n,k)*(p**k)*((1-p)**(n-k))

def moments(values,probs):
    mean=sum(x*p for x,p in zip(values,probs))
    variance=sum((x-mean)**2*p for x,p in zip(values,probs))
    return mean,variance
