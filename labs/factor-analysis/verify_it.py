import numpy as np
rng=np.random.default_rng(10); load=np.array([[.9,0],[.7,.1],[0,.8],[.1,.7]]); psi=np.array([.2,.3,.25,.3]); Z=rng.normal(size=(600,2)); X=Z@load.T+rng.normal(size=(600,4))*np.sqrt(psi); train,test=X[:450],X[450:]

# ---- Use it ----
from sklearn.decomposition import FactorAnalysis
fa=FactorAnalysis(n_components=2,random_state=0).fit(train); scores=fa.transform(test); cov_fa=fa.components_.T@fa.components_+np.diag(fa.noise_variance_)
mean=train.mean(axis=0); var=train.var(axis=0); ll_diag=float(np.mean(-.5*np.sum(np.log(2*np.pi*var)+(test-mean)**2/var,axis=1))); ll_fa=float(fa.score(test))

# ---- Verify it ----
assert scores.shape==(len(test),2)
assert np.all(fa.noise_variance_>0)
assert np.linalg.eigvalsh(cov_fa).min()>0
assert ll_fa>ll_diag
assert np.mean((np.cov(train,rowvar=False)-cov_fa)**2)<0.03
assert np.isfinite(scores).all()
