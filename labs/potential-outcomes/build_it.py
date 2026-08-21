import numpy as np
rng=np.random.default_rng(12); n=20000; x=rng.normal(size=n); y0=1+2*x+rng.normal(size=n); individual_effect=1+.6*x; y1=y0+individual_effect; true_ate=np.mean(y1-y0); a=rng.binomial(1,.5,size=n); observed=np.where(a==1,y1,y0); estimate=observed[a==1].mean()-observed[a==0].mean()
se=np.sqrt(observed[a==1].var(ddof=1)/a.sum()+observed[a==0].var(ddof=1)/(n-a.sum()))
