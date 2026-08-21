import numpy as np
X=np.array([[-2,-1],[-1.5,-2],[-1,-1.2],[1,1.1],[1.5,2],[2,1]],float); y=np.array([-1,-1,-1,1,1,1],float)
def objective(theta): return .5*np.dot(theta[:-1],theta[:-1])
def gradient(theta): return np.r_[theta[:-1],0.]
def constraints(theta): return y*(X@theta[:-1]+theta[-1])-1
def geometric_margins(theta): return y*(X@theta[:-1]+theta[-1])/np.linalg.norm(theta[:-1])

# ---- Use it ----
from scipy.optimize import minimize
from sklearn.svm import SVC
fit=minimize(objective,np.array([1.,1.,0.]),jac=gradient,constraints={'type':'ineq','fun':constraints},method='SLSQP',options={'ftol':1e-12,'maxiter':1000}); theta=fit.x
svc=SVC(kernel='linear',C=1e6).fit(X,y); sk_theta=np.r_[svc.coef_[0],svc.intercept_[0]]
margin=geometric_margins(theta)

# ---- Verify it ----
assert fit.success and constraints(theta).min()>-1e-7
assert np.all(np.sign(X@theta[:-1]+theta[-1])==y)
assert np.all(np.sign(X@sk_theta[:-1]+sk_theta[-1])==y)
assert abs(margin.min()-geometric_margins(7*theta).min())<1e-10
support=np.flatnonzero(np.isclose(constraints(theta),0,atol=1e-6)); assert len(support)>=2
assert np.allclose(theta,sk_theta,atol=2e-3)
assert np.linalg.norm(theta[:-1])>0 and margin.min()>0
