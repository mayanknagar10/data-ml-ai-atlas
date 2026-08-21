import numpy as np
from sklearn.linear_model import LinearRegression
rng=np.random.default_rng(55); n=30000; z=rng.normal(size=n); u=rng.normal(size=n); a=1.4*z+1.5*u+rng.normal(size=n); beta=2.; y=beta*a+3*u+rng.normal(size=n)
ols=LinearRegression().fit(a[:,None],y).coef_[0]; first=LinearRegression().fit(z[:,None],a); ahat=first.predict(z[:,None]); stage2=LinearRegression().fit(ahat[:,None],y).coef_[0]
wald=np.cov(z,y,ddof=0)[0,1]/np.cov(z,a,ddof=0)[0,1]

# ---- Use it ----
reduced=LinearRegression().fit(z[:,None],y).coef_[0]; first_coef=first.coef_[0]; ratio=reduced/first_coef; first_r2=first.score(z[:,None],a)
