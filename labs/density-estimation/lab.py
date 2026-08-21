import numpy as np
rng=np.random.default_rng(8); X=np.r_[rng.normal(-1,.4,80),rng.normal(1,.25,120)]; h=.3
def kde(query,bandwidth=h):
    q=np.asarray(query,float)[:,None]; z=(q-X[None,:])/bandwidth
    return np.exp(-.5*z*z).mean(axis=1)/(bandwidth*np.sqrt(2*np.pi))
grid=np.linspace(-5,5,4000); density=kde(grid); integral=float(np.trapz(density,grid))

# ---- Use it ----
from sklearn.neighbors import KernelDensity
model=KernelDensity(kernel='gaussian',bandwidth=h).fit(X[:,None]); sk_log=model.score_samples(grid[:,None])

# ---- Verify it ----
assert np.allclose(np.log(density),sk_log,atol=1e-10)
assert abs(integral-1)<1e-4
assert np.all(density>=0) and np.isfinite(density).all()
rough_small=float(np.mean(np.diff(kde(grid,.08))**2)); rough_large=float(np.mean(np.diff(kde(grid,.8))**2))
assert rough_small>rough_large
assert kde([-1])[0]>kde([4])[0]
