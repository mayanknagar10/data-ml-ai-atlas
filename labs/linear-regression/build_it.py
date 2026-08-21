import numpy as np
rng=np.random.default_rng(0)
X=rng.normal(size=(200,1)); y=3*X[:,0]+2+rng.normal(0,.3,200)
Xb=np.c_[np.ones(len(X)),X]
w=np.zeros(2); lr=.05
for _ in range(1000):
    pred=Xb@w
    grad=(2/len(Xb))*Xb.T@(pred-y)
    w-=lr*grad
print('from scratch:',w)
