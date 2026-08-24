import numpy as np
rng=np.random.default_rng(8); n=2500; phi=.75
ar=np.zeros(n); eps=rng.normal(size=n)
for i in range(1,n): ar[i]=phi*ar[i-1]+eps[i]
walk=np.cumsum(rng.normal(size=n))
def sample_acf(x,max_lag):
    z=np.asarray(x,float)-np.mean(x); denom=np.dot(z,z)
    return np.array([1.0 if k==0 else np.dot(z[k:],z[:-k])/denom for k in range(max_lag+1)])
acf_ar=sample_acf(ar,6); acf_walk=sample_acf(walk,6)

# ---- Use it ----
diff_walk=np.diff(walk)
acf_diff=sample_acf(diff_walk,3)
lag1_corr=float(np.corrcoef(ar[1:],ar[:-1])[0,1])

# ---- Verify it ----
assert abs(acf_ar[1]-lag1_corr)<2e-3
assert abs(acf_ar[1]-phi)<.04
assert np.max(np.abs(acf_ar[1:5]-phi**np.arange(1,5)))<.06
assert acf_walk[1]>.95
assert abs(acf_diff[1])<.08
assert np.var(walk)>20*np.var(diff_walk)
