from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
X,y=make_classification(n_samples=1000,n_features=15,n_informative=7,random_state=1)
Xtr,Xte,ytr,yte=train_test_split(X,y,test_size=.25,random_state=1,stratify=y)
