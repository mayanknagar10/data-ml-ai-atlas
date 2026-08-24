import numpy as np
from sklearn.ensemble import ExtraTreesRegressor
from sklearn.model_selection import train_test_split
rng=np.random.default_rng(88); n=14000; X=rng.normal(size=(n,3)); tau=1+1.2*X[:,0]; a=rng.binomial(1,.5,size=n); mu=2*X[:,0]+X[:,1]**2; y=mu+a*tau+rng.normal(scale=.5,size=n)
train,test=train_test_split(np.arange(n),test_size=.35,random_state=4); params=dict(n_estimators=240,min_samples_leaf=40,max_features=1.0,random_state=5,n_jobs=-1); m0=ExtraTreesRegressor(**params).fit(X[train][a[train]==0],y[train][a[train]==0]); m1=ExtraTreesRegressor(**params).fit(X[train][a[train]==1],y[train][a[train]==1]); cate=m1.predict(X[test])-m0.predict(X[test]); truth=tau[test]
