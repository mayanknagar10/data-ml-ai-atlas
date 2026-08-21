import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
rng=np.random.default_rng(3); X=rng.uniform(-2,2,size=(300,2)); y=1+2*X[:,0]-X[:,1]+4*X[:,0]*X[:,1]+rng.normal(scale=.2,size=300)
manual=np.c_[np.ones(len(X)),X[:,0],X[:,1],X[:,0]**2,X[:,0]*X[:,1],X[:,1]**2]
train=np.arange(220); test=np.arange(220,300); additive=LinearRegression().fit(X[train],y[train]); interaction=LinearRegression().fit(manual[train,1:],y[train])
mae_add=mean_squared_error(y[test],additive.predict(X[test])); mse_int=mean_squared_error(y[test],interaction.predict(manual[test,1:]))
