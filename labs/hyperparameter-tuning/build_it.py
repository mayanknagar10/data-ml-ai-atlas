import numpy as np
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split,StratifiedKFold,cross_val_score
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
X,y=make_classification(n_samples=400,n_features=12,n_informative=6,random_state=4)
X_dev,X_test,y_dev,y_test=train_test_split(X,y,test_size=.25,stratify=y,random_state=9)
cv=StratifiedKFold(5,shuffle=True,random_state=3); values=[.01,.1,1.,10.]
means=[]
for C in values:
    pipe=make_pipeline(StandardScaler(),LogisticRegression(C=C,max_iter=2000))
    means.append(cross_val_score(pipe,X_dev,y_dev,cv=cv,scoring='roc_auc').mean())
best_C=values[int(np.argmax(means))]
