import numpy as np
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
X,y=make_classification(n_samples=1200,n_features=10,n_informative=6,weights=[.8,.2],random_state=7)
X_fit,X_rest,y_fit,y_rest=train_test_split(X,y,test_size=.5,stratify=y,random_state=1)
X_val,X_test,y_val,y_test=train_test_split(X_rest,y_rest,test_size=.5,stratify=y_rest,random_state=2)
model=LogisticRegression(max_iter=2000).fit(X_fit,y_fit); pv=model.predict_proba(X_val)[:,1]; pt=model.predict_proba(X_test)[:,1]
def utility(y,p,t,fp_cost=1,fn_cost=4,tp_value=2):
    q=p>=t; tp=np.sum(q&(y==1)); fp=np.sum(q&(y==0)); fn=np.sum((~q)&(y==1)); return float(tp_value*tp-fp_cost*fp-fn_cost*fn)
grid=np.linspace(0,1,201); val_u=np.array([utility(y_val,pv,t) for t in grid]); threshold=float(grid[np.argmax(val_u)]); test_u=utility(y_test,pt,threshold)
