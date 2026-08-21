import numpy as np
rng=np.random.default_rng(8); X=np.r_[rng.normal(-1,.4,80),rng.normal(1,.25,120)]; h=.3
def kde(query,bandwidth=h):
    q=np.asarray(query,float)[:,None]; z=(q-X[None,:])/bandwidth
    return np.exp(-.5*z*z).mean(axis=1)/(bandwidth*np.sqrt(2*np.pi))
grid=np.linspace(-5,5,4000); density=kde(grid); integral=float(np.trapz(density,grid))

# ---- Use it ----
from sklearn.neighbors import KernelDensity
model=KernelDensity(kernel='gaussian',bandwidth=h).fit(X[:,None]); sk_log=model.score_samples(grid[:,None])
