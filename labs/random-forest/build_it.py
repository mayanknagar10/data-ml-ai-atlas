from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
X,y=make_classification(n_samples=800,n_features=12,n_informative=5,random_state=0)
Xtr,Xte,ytr,yte=train_test_split(X,y,test_size=.25,random_state=0,stratify=y)
