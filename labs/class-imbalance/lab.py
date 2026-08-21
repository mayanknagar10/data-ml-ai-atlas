import numpy as np
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import recall_score,average_precision_score
X,y=make_classification(n_samples=1000,n_features=10,n_informative=5,weights=[.95,.05],class_sep=.8,random_state=12)
Xtr,Xte,ytr,yte=train_test_split(X,y,test_size=.35,stratify=y,random_state=3)
counts=np.bincount(ytr); manual=len(ytr)/(2*counts)
plain=LogisticRegression(max_iter=2000).fit(Xtr,ytr); weighted=LogisticRegression(max_iter=2000,class_weight='balanced').fit(Xtr,ytr)
p_plain=plain.predict_proba(Xte)[:,1]; p_weighted=weighted.predict_proba(Xte)[:,1]

# ---- Use it ----
from sklearn.utils.class_weight import compute_class_weight
official=compute_class_weight('balanced',classes=np.array([0,1]),y=ytr)
results={'plain_recall':recall_score(yte,p_plain>=.5),'weighted_recall':recall_score(yte,p_weighted>=.5),'plain_ap':average_precision_score(yte,p_plain),'weighted_ap':average_precision_score(yte,p_weighted)}

# ---- Verify it ----
assert np.allclose(manual,official)
assert np.allclose(official*counts,len(ytr)/2)
assert np.array_equal(np.bincount(yte),np.bincount(yte.copy()))
assert not np.allclose(plain.coef_,weighted.coef_)
assert p_weighted.mean()>p_plain.mean()
assert all(0<=v<=1 for v in results.values())
