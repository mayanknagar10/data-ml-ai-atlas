import numpy as np
from sklearn.linear_model import LinearRegression,LogisticRegression
rng=np.random.default_rng(7); n=12000; risk=rng.normal(size=n); propensity=1/(1+np.exp(-1.7*risk)); treatment=rng.binomial(1,propensity); true_effect=-2.; outcome=4*risk+true_effect*treatment+rng.normal(scale=1,size=n)
naive=outcome[treatment==1].mean()-outcome[treatment==0].mean()
adjusted=LinearRegression().fit(np.c_[treatment,risk],outcome).coef_[0]
