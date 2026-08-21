import numpy as np
from sklearn.neighbors import KNeighborsRegressor
from sklearn.model_selection import KFold, GroupKFold, cross_val_score
rng=np.random.default_rng(31); n=1200; coords=rng.uniform(0,1,(n,2)); y=np.sin(5*coords[:,0])+np.cos(5*coords[:,1])+rng.normal(0,.03,n)
model=KNeighborsRegressor(n_neighbors=8,weights='distance'); random_cv=KFold(6,shuffle=True,random_state=31)
# Six vertical deployment regions create geographic transfer folds.
groups=np.minimum((coords[:,0]*6).astype(int),5); spatial_cv=GroupKFold(6)

# ---- Use it ----
random_rmse=np.sqrt(-cross_val_score(model,coords,y,cv=random_cv,scoring='neg_mean_squared_error')).mean(); spatial_rmse=np.sqrt(-cross_val_score(model,coords,y,groups=groups,cv=spatial_cv,scoring='neg_mean_squared_error')).mean()
random_splits=list(random_cv.split(coords)); spatial_splits=list(spatial_cv.split(coords,y,groups))
