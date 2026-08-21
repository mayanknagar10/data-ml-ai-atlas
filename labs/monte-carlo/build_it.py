import numpy as np
rng=np.random.default_rng(0)
n=200_000
x=rng.random((n,2))
inside=(x[:,0]**2+x[:,1]**2)<=1
pi_hat=4*inside.mean()
print(pi_hat)
