from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
X,y=make_classification(n_samples=800,n_features=12,n_informative=5,random_state=0)
Xtr,Xte,ytr,yte=train_test_split(X,y,test_size=.25,random_state=0,stratify=y)

# ---- Use it ----
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import roc_auc_score
m=RandomForestClassifier(n_estimators=200,min_samples_leaf=3,random_state=0,n_jobs=-1).fit(Xtr,ytr)
p=m.predict_proba(Xte)[:,1]
auc=roc_auc_score(yte,p)
print(auc)

# ---- Verify it ----
assert auc>0.8
