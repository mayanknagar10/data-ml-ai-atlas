from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
X,y=make_classification(n_samples=1000,n_features=15,n_informative=7,random_state=1)
Xtr,Xte,ytr,yte=train_test_split(X,y,test_size=.25,random_state=1,stratify=y)

# ---- Use it ----
from sklearn.ensemble import HistGradientBoostingClassifier
from sklearn.metrics import roc_auc_score
m=HistGradientBoostingClassifier(max_iter=150,learning_rate=.08,max_leaf_nodes=31,random_state=1).fit(Xtr,ytr)
auc=roc_auc_score(yte,m.predict_proba(Xte)[:,1])
print(auc)
