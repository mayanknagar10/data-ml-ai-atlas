import numpy as np
rng=np.random.default_rng(1)
X=rng.normal(size=(300,2)); y=(X[:,0]+.7*X[:,1]>0).astype(float)
Xb=np.c_[np.ones(len(X)),X]; w=np.zeros(3)
def sigmoid(z): return 1/(1+np.exp(-z))
for _ in range(2000):
    p=sigmoid(Xb@w)
    w-=0.1*(Xb.T@(p-y)/len(y))
print('accuracy',((sigmoid(Xb@w)>=.5)==y).mean())

# ---- Use it ----
from sklearn.linear_model import LogisticRegression
m=LogisticRegression().fit(X,y)
print(m.score(X,y),m.predict_proba(X[:3]))
