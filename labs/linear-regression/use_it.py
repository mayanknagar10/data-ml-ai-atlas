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
