import numpy as np
from sklearn.model_selection import KFold
from sklearn.linear_model import LinearRegression
from sklearn.tree import DecisionTreeRegressor
rng=np.random.default_rng(4); X=rng.uniform(-2,2,(120,2)); y=1.5*X[:,0]+X[:,1]**2+rng.normal(0,.15,120)
kf=KFold(5,shuffle=True,random_state=5); oof=np.zeros((len(X),2)); seen=np.zeros(len(X),int)
for train,val in kf.split(X):
    models=[LinearRegression(),DecisionTreeRegressor(max_depth=3,random_state=0)]
    for j,m in enumerate(models): oof[val,j]=m.fit(X[train],y[train]).predict(X[val])
    seen[val]+=1
meta=LinearRegression().fit(oof,y)
base_full=[LinearRegression().fit(X,y),DecisionTreeRegressor(max_depth=3,random_state=0).fit(X,y)]
stack_train=meta.predict(oof)
