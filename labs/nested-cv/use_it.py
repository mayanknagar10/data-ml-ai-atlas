import numpy as np
from sklearn.datasets import make_classification
from sklearn.model_selection import StratifiedKFold,GridSearchCV
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import roc_auc_score
X,y=make_classification(n_samples=240,n_features=10,n_informative=5,random_state=8)
outer=StratifiedKFold(4,shuffle=True,random_state=1); inner=StratifiedKFold(3,shuffle=True,random_state=2)
base=make_pipeline(StandardScaler(),LogisticRegression(max_iter=2000)); grid={'logisticregression__C':[.01,.1,1.,10.]}; oof=np.full(len(y),np.nan); chosen=[]
for train,test in outer.split(X,y):
    search=GridSearchCV(base,grid,cv=inner,scoring='roc_auc').fit(X[train],y[train])
    oof[test]=search.predict_proba(X[test])[:,1]; chosen.append(search.best_params_['logisticregression__C'])
nested_auc=roc_auc_score(y,oof)

# ---- Use it ----
from sklearn.model_selection import cross_val_predict
wrapped=GridSearchCV(base,grid,cv=inner,scoring='roc_auc')
lib_oof=cross_val_predict(wrapped,X,y,cv=outer,method='predict_proba')[:,1]
lib_auc=roc_auc_score(y,lib_oof)
