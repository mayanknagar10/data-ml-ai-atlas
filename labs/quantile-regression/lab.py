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

# ---- Verify it ----
assert abs(pinball(y,pred,tau)-obj/len(y))<1e-9
assert abs(pinball(y,pred,tau)-pinball(y,sk_pred,tau))<1e-8
assert np.allclose(pred,sk_pred,atol=1e-6)
# Intercept translation equivariance.
shift=11.0
b_shift,_=fit_quantile_lp(X,y+shift,tau)
assert abs(b_shift[0]-b[0]-shift)<1e-7
assert np.allclose(b_shift[1:],b[1:],atol=1e-7)
covered=np.mean(y<=pred)
assert abs(covered-tau)<0.03
median_b,_=fit_quantile_lp(X,y,.5)
assert b[1]>median_b[1]
