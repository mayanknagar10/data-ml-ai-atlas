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
