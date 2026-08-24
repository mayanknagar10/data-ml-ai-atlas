import numpy as np
rng=np.random.default_rng(5)
x0=np.array([1.0,-.5,.25])
noise=rng.normal(size=x0.shape)
alpha=.7
xt=np.sqrt(alpha)*x0+np.sqrt(1-alpha)*noise
noise_hat=noise
x0_hat=(xt-np.sqrt(1-alpha)*noise_hat)/np.sqrt(alpha)

# ---- Use it ----
reconstruction_error=float(np.linalg.norm(x0_hat-x0))
samples=np.stack([np.sqrt(alpha)*x0+np.sqrt(1-alpha)*rng.normal(size=x0.shape) for _ in range(200)])

# ---- Verify it ----
assert reconstruction_error<1e-12
assert samples.shape==(200,3)
assert np.all(np.isfinite(samples))
assert np.linalg.norm(samples.std(0))>0
