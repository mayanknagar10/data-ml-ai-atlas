from sklearn.datasets import make_moons
X,_=make_moons(n_samples=400,noise=.06,random_state=0)

# ---- Use it ----
from sklearn.cluster import DBSCAN
from sklearn.preprocessing import StandardScaler
Z=StandardScaler().fit_transform(X)
labels=DBSCAN(eps=.25,min_samples=6).fit_predict(Z)
print('clusters',set(labels),'noise',(labels==-1).sum())
