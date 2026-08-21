import numpy as np
rng=np.random.default_rng(0)
R=np.array([[5.,4.,0.],[0.,3.,4.],[4.,0.,5.]])
mask=R>0; U=rng.normal(scale=.1,size=(3,2)); V=rng.normal(scale=.1,size=(3,2))
for _ in range(2000):
    E=(U@V.T-R)*mask
    U-=.01*(E@V+.01*U); V-=.01*(E.T@U+.01*V)
print(U@V.T)
