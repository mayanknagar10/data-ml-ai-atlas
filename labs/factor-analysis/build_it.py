import numpy as np
rng=np.random.default_rng(10); load=np.array([[.9,0],[.7,.1],[0,.8],[.1,.7]]); psi=np.array([.2,.3,.25,.3]); Z=rng.normal(size=(600,2)); X=Z@load.T+rng.normal(size=(600,4))*np.sqrt(psi); train,test=X[:450],X[450:]
