import numpy as np
def fit_poisson_offset(X,y,exposure,steps=60,l2=1e-9):
    D=np.column_stack([np.ones(len(X)),np.asarray(X,float)])
    y=np.asarray(y,float); exposure=np.asarray(exposure,float)
    assert np.all(exposure>0) and np.all(y>=0)
    b=np.zeros(D.shape[1]); P=np.eye(D.shape[1]); P[0,0]=0
    for _ in range(steps):
        eta=np.clip(D@b+np.log(exposure),-25,25); mu=np.exp(eta)
        h=D.T@(mu[:,None]*D)+l2*P
        score=D.T@(y-mu)-l2*P@b
        step=np.linalg.solve(h,score); b+=step
        if np.max(np.abs(step))<1e-11: break
    return b,np.exp(D@b+np.log(exposure))
X=np.array([[-1],[-.5],[0],[.5],[1],[-1],[-.5],[0],[.5],[1]],float)
exposure=np.array([10,20,15,12,18,20,10,30,15,25],float)
y=np.array([1,2,2,3,6,2,1,4,4,8],float)
b,mu=fit_poisson_offset(X,y,exposure)
