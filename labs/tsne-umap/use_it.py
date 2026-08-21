import numpy as np
from sklearn.datasets import make_blobs
from sklearn.manifold import TSNE,trustworthiness
from sklearn.preprocessing import StandardScaler
X,_=make_blobs(n_samples=180,centers=4,n_features=8,cluster_std=1.2,random_state=2); X=StandardScaler().fit_transform(X)
tsne=TSNE(n_components=2,perplexity=20,init='pca',learning_rate='auto',random_state=7,max_iter=500).fit_transform(X)
tw_tsne=float(trustworthiness(X,tsne,n_neighbors=10))

# ---- Use it ----
from sklearn.decomposition import PCA
pca=PCA(n_components=2,random_state=7).fit_transform(X); tw_pca=float(trustworthiness(X,pca,n_neighbors=10))
tsne_again=TSNE(n_components=2,perplexity=20,init='pca',learning_rate='auto',random_state=7,max_iter=500).fit_transform(X)
