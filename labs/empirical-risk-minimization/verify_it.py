import numpy as np
rng=np.random.default_rng(7); x=np.linspace(-1,1,14); y=np.sin(3*x)+rng.normal(0,.12,len(x)); xt=np.linspace(-.98,.98,400); yt=np.sin(3*xt)
def design(x,degree): return np.vander(np.asarray(x),degree+1,increasing=True)
def fit_erm(x,y,degree): return np.linalg.lstsq(design(x,degree),y,rcond=None)[0]
def mse(y,p): return float(np.mean((np.asarray(y)-np.asarray(p))**2))
degrees=[1,3,5,9,13]; rows=[]
for d in degrees:
    coef=fit_erm(x,y,d); rows.append((d,mse(y,design(x,d)@coef),mse(yt,design(xt,d)@coef)))
train_best=min(rows,key=lambda r:r[1]); test_best=min(rows,key=lambda r:r[2])

# ---- Use it ----
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression
poly=PolynomialFeatures(degree=3,include_bias=True); sk=LinearRegression(fit_intercept=False).fit(poly.fit_transform(x[:,None]),y)
coef3=fit_erm(x,y,3)

# ---- Verify it ----
assert train_best[0]==13
assert train_best[1]<=min(r[1] for r in rows if r[0]!=13)
assert train_best[2]>test_best[2]
assert np.allclose(sk.coef_,coef3)
assert test_best[0] in degrees and test_best[0]!=13
assert all(np.isfinite(r[1]) and np.isfinite(r[2]) for r in rows)
# ERM is invariant to row permutation.
perm=rng.permutation(len(x)); assert np.allclose(fit_erm(x[perm],y[perm],3),coef3)
