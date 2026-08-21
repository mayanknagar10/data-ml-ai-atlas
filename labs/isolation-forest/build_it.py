import numpy as np
rng=np.random.default_rng(0)
normal=rng.normal(0,1,(500,2)); out=rng.normal(7,.3,(12,2)); X=np.vstack([normal,out])
