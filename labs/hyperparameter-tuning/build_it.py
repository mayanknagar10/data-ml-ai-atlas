from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
X,y=make_classification(n_samples=700,n_features=10,n_informative=5,random_state=0)
Xtr,Xte,ytr,yte=train_test_split(X,y,test_size=.2,random_state=0,stratify=y)
