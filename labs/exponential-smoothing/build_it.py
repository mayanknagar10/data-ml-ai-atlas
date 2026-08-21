import numpy as np
t=np.arange(72)
y=20+.2*t+3*np.sin(2*np.pi*t/12)+np.random.default_rng(1).normal(0,.4,len(t))
