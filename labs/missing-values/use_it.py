import numpy as np
Xtr=np.array([[1.,np.nan],[2.,10.],[100.,20.],[3.,np.nan]]); Xte=np.array([[np.nan,1.],[4.,np.nan]])
median=np.nanmedian(Xtr,axis=0); indicator_cols=np.isnan(Xtr).any(axis=0)
def transform(X,median,indicator_cols):
    X=np.asarray(X,float); indicator=np.isnan(X).astype(float)[:,indicator_cols]; filled=np.where(np.isnan(X),median,X); return np.c_[filled,indicator]
manual_train=transform(Xtr,median,indicator_cols); manual_test=transform(Xte,median,indicator_cols)

# ---- Use it ----
from sklearn.impute import SimpleImputer
imp=SimpleImputer(strategy='median',add_indicator=True).fit(Xtr)
sk_train=imp.transform(Xtr); sk_test=imp.transform(Xte)
