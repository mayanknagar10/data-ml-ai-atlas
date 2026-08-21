from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
X,y=make_classification(n_samples=700,n_features=10,n_informative=5,random_state=0)
Xtr,Xte,ytr,yte=train_test_split(X,y,test_size=.2,random_state=0,stratify=y)

# ---- Use it ----
from sklearn.model_selection import GridSearchCV
from sklearn.ensemble import RandomForestClassifier
gs=GridSearchCV(RandomForestClassifier(random_state=0),{'max_depth':[3,6,None],'min_samples_leaf':[1,5,15]},cv=4,scoring='roc_auc').fit(Xtr,ytr)
print(gs.best_params_,gs.best_score_,gs.score(Xte,yte))

# ---- Verify it ----
assert gs.best_estimator_ is not None
