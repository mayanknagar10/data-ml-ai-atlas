import numpy as np
from sklearn.linear_model import LinearRegression,LogisticRegression
rng=np.random.default_rng(21); n=15000; z=rng.normal(size=n); e=1/(1+np.exp(-1.2*z)); a=rng.binomial(1,e); tau=1.5; y=2+2*z+tau*a+.5*a*z+rng.normal(size=n)
naive=y[a==1].mean()-y[a==0].mean(); outcome=LinearRegression().fit(np.c_[a,z,a*z],y); x1=np.c_[np.ones(n),z,z]; x0=np.c_[np.zeros(n),z,np.zeros(n)]; gcomp=np.mean(outcome.predict(x1)-outcome.predict(x0))

# ---- Use it ----
ps=LogisticRegression(max_iter=2000).fit(z[:,None],a).predict_proba(z[:,None])[:,1]
ipw=np.mean(a*y/ps-(1-a)*y/(1-ps)); effective=(np.sum(a/ps+(1-a)/(1-ps))**2)/np.sum((a/ps+(1-a)/(1-ps))**2)
