import numpy as np
rng=np.random.default_rng(5)
x0=np.array([1.0,-.5,.25])
noise=rng.normal(size=x0.shape)
alpha=.7
xt=np.sqrt(alpha)*x0+np.sqrt(1-alpha)*noise
noise_hat=noise
x0_hat=(xt-np.sqrt(1-alpha)*noise_hat)/np.sqrt(alpha)
