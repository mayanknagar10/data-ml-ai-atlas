import numpy as np
rng=np.random.default_rng(0)
n=200_000
x=rng.random((n,2))
inside=(x[:,0]**2+x[:,1]**2)<=1
pi_hat=4*inside.mean()
print(pi_hat)

# ---- Use it ----
batches=inside.reshape(200,-1).mean(axis=1)*4
print('SE',batches.std(ddof=1)/np.sqrt(len(batches)))
