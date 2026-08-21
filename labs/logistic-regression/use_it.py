import numpy as np
def sigmoid(z):
    z=np.clip(z,-35,35)
    return 1/(1+np.exp(-z))
def fit_logistic(X,y,l2=1e-6,steps=40):
    D=np.column_stack([np.ones(len(X)),np.asarray(X,float)])
    y=np.asarray(y,float); b=np.zeros(D.shape[1])
    penalty=np.eye(D.shape[1]); penalty[0,0]=0
    for _ in range(steps):
        p=sigmoid(D@b); w=np.maximum(p*(1-p),1e-9)
        h=D.T@(w[:,None]*D)+l2*penalty
        score=D.T@(y-p)-l2*penalty@b
        b+=np.linalg.solve(h,score)
    return b,sigmoid(D@b)
X=np.array([[-2,-1],[-1,-1],[-1,1],[0,-1],[0,1],[1,-1],[1,1],[2,1]],float)
y=np.array([0,0,0,0,1,1,1,1])
b,p=fit_logistic(X,y,l2=0.2)

# ---- Use it ----
from sklearn.linear_model import LogisticRegression
sk=LogisticRegression(C=5.0,fit_intercept=True,solver='lbfgs',tol=1e-12,max_iter=10000).fit(X,y)
sk_p=sk.predict_proba(X)[:,1]
sk_b=np.r_[sk.intercept_,sk.coef_.ravel()]
