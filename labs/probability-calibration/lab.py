from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
X,y=make_classification(n_samples=1200,n_features=12,n_informative=5,class_sep=.8,random_state=0)
Xtr,Xte,ytr,yte=train_test_split(X,y,test_size=.3,random_state=0,stratify=y)

# ---- Use it ----
from sklearn.svm import LinearSVC
from sklearn.calibration import CalibratedClassifierCV
from sklearn.metrics import brier_score_loss
m=CalibratedClassifierCV(LinearSVC(),method='sigmoid',cv=4).fit(Xtr,ytr)
p=m.predict_proba(Xte)[:,1]
print('Brier',brier_score_loss(yte,p))

# ---- Verify it ----
assert ((p>=0)&(p<=1)).all()
