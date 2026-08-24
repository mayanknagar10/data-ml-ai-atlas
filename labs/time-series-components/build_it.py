import numpy as np
rng=np.random.default_rng(2); n=120; t=np.arange(n); true_trend=20+.08*t; pattern=np.array([-2,-1,0,1,2,3,2,1,0,-1,-2,-3.]); y=true_trend+pattern[t%12]+rng.normal(scale=.15,size=n)
window=12; kernel=np.ones(window)/window; raw=np.convolve(y,kernel,mode='valid'); trend=np.full(n,np.nan); trend[6:6+len(raw)]=raw
detrended=y-trend; seasonal=np.array([np.nanmean(detrended[(t%12)==k]) for k in range(12)]); seasonal-=seasonal.mean(); reconstruction=trend+seasonal[t%12]; interior=np.isfinite(trend)
