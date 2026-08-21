import numpy as np
def f(x): return x[...,0]+x[...,1]+2*x[...,0]*x[...,1]
x=np.array([1.,1.]); base=np.array([0.,0.])
v_empty=float(f(base)); v1=float(f(np.array([x[0],base[1]]))); v2=float(f(np.array([base[0],x[1]]))); v12=float(f(x))
phi1=.5*((v1-v_empty)+(v12-v2)); phi2=.5*((v2-v_empty)+(v12-v1)); phi=np.array([phi1,phi2])
rng=np.random.default_rng(2); X=rng.normal(size=(500,2)); y=f(X); baseline=-np.mean((y-f(X))**2)
drops=[]
for j in range(2):
    xp=X.copy(); xp[:,j]=rng.permutation(xp[:,j]); drops.append(baseline-(-np.mean((y-f(xp))**2)))

# ---- Use it ----
from itertools import permutations
contrib={0:[],1:[]}
for order in permutations([0,1]):
    current=base.copy(); before=float(f(current))
    for j in order:
        current[j]=x[j]; after=float(f(current)); contrib[j].append(after-before); before=after
order_average=np.array([np.mean(contrib[0]),np.mean(contrib[1])])
