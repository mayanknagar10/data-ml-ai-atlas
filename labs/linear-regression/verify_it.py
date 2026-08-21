import numpy as np
def ols_fit(X,y):
    X=np.asarray(X,float); y=np.asarray(y,float)
    design=np.column_stack([np.ones(len(X)),X])
    beta,_,rank,singular=np.linalg.lstsq(design,y,rcond=None)
    fitted=design@beta; residual=y-fitted
    return beta,fitted,residual,rank,singular
X=np.array([[18,0],[20,0],[22,1],[24,1],[26,0],[28,1]],float)
y=np.array([132,123,130,120,91,101],float)
beta,fitted,residual,rank,singular=ols_fit(X,y)

# ---- Use it ----
from sklearn.linear_model import LinearRegression
model=LinearRegression().fit(X,y)
sk_pred=model.predict(X)
sk_beta=np.r_[model.intercept_,model.coef_]

# ---- Verify it ----
design=np.column_stack([np.ones(len(X)),X])
assert rank==design.shape[1]
assert np.allclose(design.T@residual,0,atol=1e-10)
assert np.allclose(beta,sk_beta,atol=1e-10)
assert np.allclose(fitted,sk_pred,atol=1e-10)
shift=37.0
beta_shift,fit_shift,res_shift,_,_=ols_fit(X,y+shift)
assert np.allclose(fit_shift,fitted+shift)
assert np.allclose(beta_shift[1:],beta[1:])
assert abs(beta_shift[0]-beta[0]-shift)<1e-10
assert singular[-1]>0
