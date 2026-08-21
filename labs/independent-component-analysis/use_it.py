import numpy as np
rng=np.random.default_rng(13); n=1200; S=np.column_stack([rng.laplace(size=n),rng.uniform(-np.sqrt(3),np.sqrt(3),n)]); S=(S-S.mean(axis=0))/S.std(axis=0); A=np.array([[1,.6],[.4,1.2]]); X=S@A.T

# ---- Use it ----
from sklearn.decomposition import FastICA
model=FastICA(n_components=2,whiten='unit-variance',random_state=2,max_iter=2000,tol=1e-5).fit(X); recovered=model.transform(X); recon=model.inverse_transform(recovered)
corr=np.corrcoef(S.T,recovered.T)[:2,2:]
