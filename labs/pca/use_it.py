import numpy as np
X=np.array([[1,1.1],[2,1.9],[3,3.2],[4,3.9],[5,5.1]],float); mean=X.mean(axis=0); C=X-mean
U,S,Vt=np.linalg.svd(C,full_matrices=False); q=1; loadings=Vt[:q].T; scores=C@loadings; recon=scores@loadings.T+mean
explained=(S**2)/(len(X)-1); ratio=explained/explained.sum()

# ---- Use it ----
from sklearn.decomposition import PCA
model=PCA(n_components=1,svd_solver='full').fit(X); sk_scores=model.transform(X); sk_recon=model.inverse_transform(sk_scores)
