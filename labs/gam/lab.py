import numpy as np
def cubic_block(x,knots):
    x=np.asarray(x,float).reshape(-1)
    B=np.column_stack([x,x**2,x**3]+[np.maximum(x-k,0)**3 for k in knots])
    return B
def additive_design(X,knots_by_feature,means=None):
    blocks=[cubic_block(X[:,j],knots_by_feature[j]) for j in range(X.shape[1])]
    raw=np.column_stack(blocks)
    if means is None: means=raw.mean(0)
    return np.column_stack([np.ones(len(X)),raw-means]),means
def fit_additive(X,y,knots,alpha=.02):
    D,means=additive_design(X,knots); P=np.eye(D.shape[1]); P[0,0]=0
    coef=np.linalg.solve(D.T@D+alpha*P,D.T@y)
    return coef,means
rng=np.random.default_rng(12)
X=rng.uniform(-1,1,size=(240,2)); y=np.sin(2.6*X[:,0])+1.4*(X[:,1]**2-.33)+rng.normal(0,.12,240)
train=np.arange(240)%4!=0; test=~train; knots=[[-.5,0,.5],[-.5,0,.5]]
coef,means=fit_additive(X[train],y[train],knots)
Dtest,_=additive_design(X[test],knots,means); pred=Dtest@coef

# ---- Use it ----
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import SplineTransformer
from sklearn.linear_model import Ridge,LinearRegression
sk=make_pipeline(SplineTransformer(n_knots=5,degree=3,include_bias=False),Ridge(alpha=.02)).fit(X[train],y[train])
sk_pred=sk.predict(X[test])
linear=LinearRegression().fit(X[train],y[train])

# ---- Verify it ----
assert np.mean((pred-y[test])**2)<0.08
assert np.mean((sk_pred-y[test])**2)<np.mean((linear.predict(X[test])-y[test])**2)
# Additivity: changing feature 0 has the same contribution at two feature-1 values.
base=np.array([[0.1,-.8],[.7,-.8],[0.1,.8],[.7,.8]])
Db,_=additive_design(base,knots,means); bp=Db@coef
assert abs((bp[1]-bp[0])-(bp[3]-bp[2]))<1e-10
perm=np.random.default_rng(2).permutation(train.sum())
coef2,means2=fit_additive(X[train][perm],y[train][perm],knots)
assert np.allclose(means2,means)
assert np.allclose(coef2,coef,atol=1e-8)
assert np.isfinite(pred).all()
