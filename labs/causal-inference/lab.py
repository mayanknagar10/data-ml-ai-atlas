import numpy as np
from sklearn.linear_model import LinearRegression,LogisticRegression
rng=np.random.default_rng(7); n=12000; risk=rng.normal(size=n); propensity=1/(1+np.exp(-1.7*risk)); treatment=rng.binomial(1,propensity); true_effect=-2.; outcome=4*risk+true_effect*treatment+rng.normal(scale=1,size=n)
naive=outcome[treatment==1].mean()-outcome[treatment==0].mean()
adjusted=LinearRegression().fit(np.c_[treatment,risk],outcome).coef_[0]

# ---- Use it ----
ps=LogisticRegression(max_iter=2000).fit(risk[:,None],treatment).predict_proba(risk[:,None])[:,1]
weights=treatment/ps+(1-treatment)/(1-ps)
weighted_treated=np.sum(weights*treatment*outcome)/np.sum(weights*treatment); weighted_control=np.sum(weights*(1-treatment)*outcome)/np.sum(weights*(1-treatment)); ipw=weighted_treated-weighted_control

# ---- Verify it ----
assert naive>0
assert abs(adjusted-true_effect)<.08
assert abs(ipw-true_effect)<.12
assert np.all((ps>0)&(ps<1))
assert abs(treatment.mean()-propensity.mean())<.02
