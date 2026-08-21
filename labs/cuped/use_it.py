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
design=np.column_stack([np.ones(n),z,x-x.mean()])
coefficients=np.linalg.lstsq(design,y,rcond=None)[0]
regression_effect=float(coefficients[1])
