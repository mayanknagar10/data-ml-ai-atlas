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
