import numpy as np
from sklearn.datasets import make_classification
from sklearn.model_selection import KFold
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
X,y=make_classification(n_samples=120,n_features=6,random_state=7)
cv=KFold(n_splits=5,shuffle=True,random_state=11); oof=np.full(len(y),np.nan); fold_scores=[]
for train,valid in cv.split(X):
    model=make_pipeline(StandardScaler(),LogisticRegression(max_iter=1000))
    model.fit(X[train],y[train]); oof[valid]=model.predict(X[valid]); fold_scores.append(accuracy_score(y[valid],oof[valid]))
pooled=accuracy_score(y,oof)

# ---- Use it ----
from sklearn.model_selection import cross_validate,cross_val_predict
factory=make_pipeline(StandardScaler(),LogisticRegression(max_iter=1000))
result=cross_validate(factory,X,y,cv=cv,scoring='accuracy',return_train_score=False)
lib_oof=cross_val_predict(factory,X,y,cv=cv,method='predict')

# ---- Verify it ----
assert not np.isnan(oof).any() and len(oof)==len(y)
assert np.array_equal(oof,lib_oof)
assert np.allclose(fold_scores,result['test_score'])
fold_sizes=np.array([len(v) for _,v in cv.split(X)]); assert abs(pooled-np.average(fold_scores,weights=fold_sizes))<1e-12
for train,valid in cv.split(X): assert set(train).isdisjoint(valid)
