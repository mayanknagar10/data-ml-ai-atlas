import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
rng=np.random.default_rng(3); X=rng.uniform(-2,2,size=(300,2)); y=1+2*X[:,0]-X[:,1]+4*X[:,0]*X[:,1]+rng.normal(scale=.2,size=300)
manual=np.c_[np.ones(len(X)),X[:,0],X[:,1],X[:,0]**2,X[:,0]*X[:,1],X[:,1]**2]
train=np.arange(220); test=np.arange(220,300); additive=LinearRegression().fit(X[train],y[train]); interaction=LinearRegression().fit(manual[train,1:],y[train])
mae_add=mean_squared_error(y[test],additive.predict(X[test])); mse_int=mean_squared_error(y[test],interaction.predict(manual[test,1:]))

# ---- Use it ----
from sklearn.preprocessing import PolynomialFeatures
poly=PolynomialFeatures(degree=2,include_bias=True).fit(X[train]); generated=poly.transform(X); names=poly.get_feature_names_out(['x1','x2'])

# ---- Verify it ----
assert np.allclose(manual,generated)
assert names.tolist()==['1','x1','x2','x1^2','x1 x2','x2^2']
assert mse_int<mae_add*.05
assert abs(interaction.coef_[3]-4)<.1
assert manual.shape==(300,6)
