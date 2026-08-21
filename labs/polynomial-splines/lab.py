import numpy as np
def truncated_cubic(x,knots):
    x=np.asarray(x,float).reshape(-1)
    cols=[np.ones_like(x),x,x**2,x**3]
    cols += [np.maximum(x-k,0.0)**3 for k in knots]
    return np.column_stack(cols)
def fit_spline(x,y,knots,ridge=1e-8):
    B=truncated_cubic(x,knots); P=np.eye(B.shape[1]); P[0,0]=0
    coef=np.linalg.solve(B.T@B+ridge*P,B.T@np.asarray(y,float))
    return coef
rng=np.random.default_rng(4)
x=np.linspace(0,1,100); y=np.sin(2.5*np.pi*x)+rng.normal(0,.08,len(x))
train=np.arange(len(x))%5!=0; test=~train; knots=[.25,.5,.75]
coef=fit_spline(x[train],y[train],knots)
pred=truncated_cubic(x[test],knots)@coef

# ---- Use it ----
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import SplineTransformer
from sklearn.linear_model import Ridge,LinearRegression
model=make_pipeline(SplineTransformer(n_knots=5,degree=3,include_bias=False),Ridge(alpha=1e-3)).fit(x[train,None],y[train])
sk_pred=model.predict(x[test,None])
linear=LinearRegression().fit(x[train,None],y[train])

# ---- Verify it ----
assert truncated_cubic(x,knots).shape==(100,7)
assert np.linalg.matrix_rank(truncated_cubic(x[train],knots))==7
for k in knots:
    eps=1e-6
    left=truncated_cubic([k-eps],knots)@coef
    right=truncated_cubic([k+eps],knots)@coef
    assert abs((left-right).item())<1e-4
linear_mse=np.mean((linear.predict(x[test,None])-y[test])**2)
spline_mse=np.mean((sk_pred-y[test])**2)
assert spline_mse<0.45*linear_mse
perm=np.random.default_rng(9).permutation(train.sum())
coef_perm=fit_spline(x[train][perm],y[train][perm],knots)
assert np.allclose(coef_perm,coef,atol=1e-6)
assert np.isfinite(pred).all()
