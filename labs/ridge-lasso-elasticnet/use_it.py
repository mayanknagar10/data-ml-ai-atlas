import numpy as np
from sklearn.datasets import make_regression
X,y=make_regression(n_samples=250,n_features=12,n_informative=4,noise=15,random_state=0)

# ---- Use it ----
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import Ridge,Lasso
ridge=make_pipeline(StandardScaler(),Ridge(alpha=10)).fit(X,y)
lasso=make_pipeline(StandardScaler(),Lasso(alpha=3,max_iter=10000)).fit(X,y)
print(ridge[-1].coef_)
print(lasso[-1].coef_)
