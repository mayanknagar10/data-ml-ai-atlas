import numpy as np
X=np.array([[1,1.1],[2,1.9],[3,3.2],[4,3.9],[5,5.1]],float); mean=X.mean(axis=0); C=X-mean
U,S,Vt=np.linalg.svd(C,full_matrices=False); q=1; loadings=Vt[:q].T; scores=C@loadings; recon=scores@loadings.T+mean
explained=(S**2)/(len(X)-1); ratio=explained/explained.sum()

# ---- Use it ----
from sklearn.decomposition import PCA
model=PCA(n_components=1,svd_solver='full').fit(X); sk_scores=model.transform(X); sk_recon=model.inverse_transform(sk_scores)

# ---- Verify it ----
assert np.allclose(C.mean(axis=0),0)
assert np.allclose(loadings.T@loadings,np.eye(q))
assert np.allclose(recon,sk_recon,atol=1e-10)
assert np.allclose(loadings@loadings.T,model.components_.T@model.components_,atol=1e-10)
assert abs(ratio.sum()-1)<1e-12
assert np.mean((X-recon)**2)<np.mean((X-X.mean(axis=0))**2)
