import numpy as np
def cuped(y,x):
    x=np.asarray(x,float); y=np.asarray(y,float)
    xc=x-x.mean(); theta=float(np.dot(xc,y-y.mean())/np.dot(xc,xc))
    return y-theta*xc,theta
rng=np.random.default_rng(7); n=4000
x=rng.normal(10,3,n); z=rng.integers(0,2,n)
y=5+0.8*x+1.5*z+rng.normal(0,2,n)
y_adj,theta=cuped(y,x)
def arm_effect(values,z): return values[z==1].mean()-values[z==0].mean()
raw_effect=arm_effect(y,z); adjusted_effect=arm_effect(y_adj,z)

# ---- Use it ----
import statsmodels.api as sm
design=sm.add_constant(np.column_stack([z,x-x.mean()]))
fit=sm.OLS(y,design).fit(cov_type='HC1')
regression_effect=float(fit.params[1])

# ---- Verify it ----
assert abs(theta-0.8)<0.05
assert abs(adjusted_effect-regression_effect)<1e-10
assert np.var(y_adj)<np.var(y)
assert abs(adjusted_effect-1.5)<0.12
raw=[]; adjusted=[]
for seed in range(200):
    local=np.random.default_rng(seed); zz=local.integers(0,2,n); yy=5+0.8*x+1.5*zz+local.normal(0,2,n); aa,_=cuped(yy,x)
    raw.append(arm_effect(yy,zz)); adjusted.append(arm_effect(aa,zz))
assert abs(np.mean(adjusted)-1.5)<0.03
assert np.var(adjusted)<0.6*np.var(raw)
