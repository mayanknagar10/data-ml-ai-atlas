import numpy as np
t=np.arange(120)
y=.05*t + 2*np.sin(2*np.pi*t/12) + np.random.default_rng(0).normal(0,.3,len(t))

# ---- Use it ----
from statsmodels.tsa.seasonal import STL
r=STL(y,period=12,robust=True).fit()
print(r.trend[:5],r.seasonal[:5])

# ---- Verify it ----
assert len(r.trend)==len(y) and abs(np.nanmean(r.resid))<1
