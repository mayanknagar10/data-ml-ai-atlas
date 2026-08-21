import numpy as np
rng=np.random.default_rng(0)
x=np.array([2.,3.,4.,5.,8.,9.])
stats=np.array([rng.choice(x,len(x),replace=True).mean() for _ in range(5000)])
ci=np.quantile(stats,[.025,.975])
print(ci)
