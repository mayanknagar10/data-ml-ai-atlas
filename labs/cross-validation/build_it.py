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
