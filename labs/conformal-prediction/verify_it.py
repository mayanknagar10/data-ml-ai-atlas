import numpy as np
rng=np.random.default_rng(0)
x=np.linspace(0,1,120); y=2*x+rng.normal(0,.15,len(x))
pred=2*x
cal=np.arange(80,100); test=np.arange(100,120)
scores=np.abs(y[cal]-pred[cal]); q=np.quantile(scores,.90,method="higher")
lo,hi=pred[test]-q,pred[test]+q
print(q,np.mean((y[test]>=lo)&(y[test]<=hi)))

# ---- Use it ----
print(list(zip(lo[:3],hi[:3])))

# ---- Verify it ----
assert q>=0 and np.all(lo<=hi)
