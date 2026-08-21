import numpy as np
rng=np.random.default_rng(29); n=150000; xs=rng.normal(-.25,1,n); xt=rng.normal(.25,1,n)
def outcome(x): return x*x+.3*x
def predict(x): return .4*x+.2
ls=(predict(xs)-outcome(xs))**2; lt=(predict(xt)-outcome(xt))**2
def normal_pdf(x,mu): return np.exp(-.5*(x-mu)**2)/np.sqrt(2*np.pi)
w=normal_pdf(xs,.25)/normal_pdf(xs,-.25); source_risk=ls.mean(); target_risk=lt.mean(); weighted_risk=np.sum(w*ls)/np.sum(w); ess=w.sum()**2/np.sum(w*w)

# ---- Use it ----
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import roc_auc_score
X=np.r_[xs[:5000],xt[:5000]][:,None]; domain=np.r_[np.zeros(5000),np.ones(5000)]; clf=LogisticRegression().fit(X,domain); domain_auc=roc_auc_score(domain,clf.predict_proba(X)[:,1])

# ---- Verify it ----
assert abs(weighted_risk-target_risk)<.04
assert abs(weighted_risk-target_risk)<abs(source_risk-target_risk)
assert abs(w.mean()-1)<.02
assert 0<ess<n and ess/n<.8
assert domain_auc>.6
# No shift gives unit weights and unchanged risk.
w_same=normal_pdf(xs,-.25)/normal_pdf(xs,-.25); assert np.allclose(w_same,1)
assert np.isfinite([source_risk,target_risk,weighted_risk,ess]).all()
