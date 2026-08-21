import numpy as np
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import r2_score
rng=np.random.default_rng(5); n=700; signal=rng.normal(size=n); duplicate=signal+rng.normal(scale=.05,size=n); noise=rng.normal(size=n); X=np.c_[signal,duplicate,noise]; y=3*signal+rng.normal(scale=.5,size=n)
Xtr,Xte,ytr,yte=train_test_split(X,y,test_size=.35,random_state=2); model=RandomForestRegressor(n_estimators=160,min_samples_leaf=4,random_state=3).fit(Xtr,ytr); baseline=r2_score(yte,model.predict(Xte)); impurity=model.feature_importances_

# ---- Use it ----
from sklearn.inspection import permutation_importance
perm=permutation_importance(model,Xte,yte,scoring='r2',n_repeats=12,random_state=4); grouped=Xte.copy(); order=rng.permutation(len(Xte)); grouped[:,[0,1]]=grouped[order][:,[0,1]]; grouped_drop=baseline-r2_score(yte,model.predict(grouped))

# ---- Verify it ----
assert baseline>.9
assert abs(impurity.sum()-1)<1e-12
assert perm.importances.shape==(3,12)
assert max(perm.importances_mean[:2])>perm.importances_mean[2]+.2
assert grouped_drop>perm.importances_mean[2]+.5
assert np.all(np.isfinite(perm.importances))
