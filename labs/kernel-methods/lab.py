import numpy as np
X=np.linspace(-2,2,18)[:,None]; y=np.sin(2*X[:,0]); gamma=1.2; lam=0.05
def rbf(A,B):
    sq=np.sum((A[:,None,:]-B[None,:,:])**2,axis=2); return np.exp(-gamma*sq)
K=rbf(X,X); alpha=np.linalg.solve(K+lam*np.eye(len(X)),y)
def predict(Q): return rbf(np.asarray(Q),X)@alpha
scratch_pred=predict(X)

# ---- Use it ----
from sklearn.kernel_ridge import KernelRidge
model=KernelRidge(alpha=lam,kernel='rbf',gamma=gamma).fit(X,y)
sk_pred=model.predict(X)

# ---- Verify it ----
assert np.allclose(K,K.T)
assert np.linalg.eigvalsh(K).min()>-1e-10
assert np.allclose(scratch_pred,sk_pred,atol=1e-10)
assert np.mean((scratch_pred-y)**2)<0.01
perm=np.arange(len(X))[::-1]; alpha_p=np.linalg.solve(K[perm][:,perm]+lam*np.eye(len(X)),y[perm]); pred_p=rbf(X,X[perm])@alpha_p
assert np.allclose(pred_p,scratch_pred)
assert np.isfinite(alpha).all()
