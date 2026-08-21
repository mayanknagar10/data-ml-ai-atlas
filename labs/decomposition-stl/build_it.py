import numpy as np
t=np.arange(120)
y=.05*t + 2*np.sin(2*np.pi*t/12) + np.random.default_rng(0).normal(0,.3,len(t))
