import numpy as np
def sigmoid(z): return 1/(1+np.exp(-np.clip(z,-35,35)))
def logit(p): return np.log(p/(1-p))
def prior_correct(sample_probability,pop_prevalence,sample_prevalence):
    eta=logit(np.clip(sample_probability,1e-9,1-1e-9))
    return sigmoid(eta+logit(pop_prevalence)-logit(sample_prevalence))
rng=np.random.default_rng(21)
X=rng.normal(size=(6000,2)); true_p=sigmoid(-4.2+1.1*X[:,0]-.7*X[:,1])
y=rng.binomial(1,true_p); prevalence=y.mean()
pos=np.flatnonzero(y==1); neg=np.flatnonzero(y==0)
keep_neg=rng.choice(neg,size=min(len(neg),3*len(pos)),replace=False)
keep=np.r_[pos,keep_neg]; sample_prevalence=y[keep].mean()

# ---- Use it ----
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import average_precision_score
model=LogisticRegression(C=1e6,max_iter=2000).fit(X[keep],y[keep])
raw=model.predict_proba(X)[:,1]
corrected=prior_correct(raw,prevalence,sample_prevalence)
raw_ap=average_precision_score(y,raw); corrected_ap=average_precision_score(y,corrected)

# ---- Verify it ----
assert sample_prevalence>5*prevalence
assert raw.mean()>3*prevalence
assert abs(corrected.mean()-prevalence)<0.01
assert abs(raw_ap-corrected_ap)<1e-12
assert np.array_equal(np.argsort(raw),np.argsort(corrected))
# Correction changes probability policy even though ranking is fixed.
assert np.sum(raw>=0.1)>np.sum(corrected>=0.1)
# Perfect prior-only sample predictions map back to the population prior.
assert abs(prior_correct(np.array([sample_prevalence]),prevalence,sample_prevalence)[0]-prevalence)<1e-12
