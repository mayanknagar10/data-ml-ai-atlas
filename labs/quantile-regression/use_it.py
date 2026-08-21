import numpy as np
from scipy.optimize import linprog
def fit_quantile_lp(X,y,tau):
    D=np.column_stack([np.ones(len(X)),np.asarray(X,float)]); n,d=D.shape
    c=np.r_[np.zeros(d),np.full(n,tau),np.full(n,1-tau)]
    A=np.column_stack([D,np.eye(n),-np.eye(n)])
    bounds=[(None,None)]*d+[(0,None)]*(2*n)
    result=linprog(c,A_eq=A,b_eq=np.asarray(y,float),bounds=bounds,method='highs')
    assert result.success
    return result.x[:d],result.fun
def pinball(y,p,tau):
    r=np.asarray(y)-np.asarray(p)
    return np.mean(np.where(r>=0,tau*r,(tau-1)*r))
rng=np.random.default_rng(18)
X=rng.uniform(0,3,size=(180,1)); noise=rng.normal(size=180)*(0.25+0.35*X[:,0])
y=1+1.7*X[:,0]+noise; tau=.8
b,obj=fit_quantile_lp(X,y,tau)
D=np.column_stack([np.ones(len(X)),X]); pred=D@b

# ---- Use it ----
from sklearn.linear_model import QuantileRegressor
sk=QuantileRegressor(quantile=tau,alpha=0,fit_intercept=True,solver='highs').fit(X,y)
sk_b=np.r_[sk.intercept_,sk.coef_]
sk_pred=sk.predict(X)
