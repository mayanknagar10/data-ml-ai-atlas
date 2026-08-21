import numpy as np
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import r2_score
rng=np.random.default_rng(5); n=700; signal=rng.normal(size=n); duplicate=signal+rng.normal(scale=.05,size=n); noise=rng.normal(size=n); X=np.c_[signal,duplicate,noise]; y=3*signal+rng.normal(scale=.5,size=n)
Xtr,Xte,ytr,yte=train_test_split(X,y,test_size=.35,random_state=2); model=RandomForestRegressor(n_estimators=160,min_samples_leaf=4,random_state=3).fit(Xtr,ytr); baseline=r2_score(yte,model.predict(Xte)); impurity=model.feature_importances_
