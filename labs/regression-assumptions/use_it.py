import numpy as np
def ols_diagnostics(X,y):
    D=np.column_stack([np.ones(len(X)),np.asarray(X,float)])
    y=np.asarray(y,float)
    beta=np.linalg.lstsq(D,y,rcond=None)[0]
    fitted=D@beta; residual=y-fitted
    h=np.sum(D*(D@np.linalg.pinv(D.T@D)),axis=1)
    dof=len(y)-D.shape[1]; mse=(residual@residual)/dof
    student=residual/np.sqrt(np.maximum(mse*(1-h),1e-15))
    cook=(residual**2/(D.shape[1]*mse))*h/np.maximum((1-h)**2,1e-15)
    return beta,fitted,residual,h,student,cook
X=np.array([[0],[1],[2],[3],[4],[12]],float)
y=np.array([0.1,1.0,2.1,3.0,4.1,9.0])
beta,fitted,residual,h,student,cook=ols_diagnostics(X,y)

# ---- Use it ----
from sklearn.linear_model import LinearRegression
sk=LinearRegression().fit(X,y)
sk_beta=np.r_[sk.intercept_,sk.coef_.ravel()]
without=LinearRegression().fit(X[:-1],y[:-1])
