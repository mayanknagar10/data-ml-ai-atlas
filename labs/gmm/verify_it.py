import numpy as np
rng=np.random.default_rng(3); X=np.r_[rng.normal(-2,.4,80),rng.normal(2,.6,120)]; K=2; means=np.array([-1.,1.]); var=np.array([1.,1.]); weight=np.array([.5,.5]); history=[]
for _ in range(100):
    logp=np.column_stack([np.log(weight[k])-.5*(np.log(2*np.pi*var[k])+(X-means[k])**2/var[k]) for k in range(K)])
    m=logp.max(axis=1,keepdims=True); resp=np.exp(logp-m); norm=resp.sum(axis=1,keepdims=True); ll=float(np.sum(m[:,0]+np.log(norm[:,0]))); resp/=norm; history.append(ll)
    Nk=resp.sum(axis=0); weight=Nk/len(X); means=(resp*X[:,None]).sum(axis=0)/Nk; var=(resp*(X[:,None]-means)**2).sum(axis=0)/Nk+1e-6
order=np.argsort(means); means=means[order]; weight=weight[order]; var=var[order]; resp=resp[:,order]

# ---- Use it ----
from sklearn.mixture import GaussianMixture
model=GaussianMixture(n_components=2,covariance_type='diag',reg_covar=1e-6,n_init=5,random_state=3).fit(X[:,None]); sk_means=np.sort(model.means_[:,0])

# ---- Verify it ----
assert all(b>=a-1e-8 for a,b in zip(history,history[1:]))
assert np.allclose(resp.sum(axis=1),1)
assert np.all(var>0) and abs(weight.sum()-1)<1e-12
assert np.allclose(means,sk_means,atol=.12)
assert means[0]<0<means[1]
assert np.isfinite(history).all()
