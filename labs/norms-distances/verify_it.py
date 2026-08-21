import math

def lp(x,y,p):
    if len(x)!=len(y): raise ValueError('shape mismatch')
    delta=[abs(a-b) for a,b in zip(x,y)]
    if p==math.inf: return max(delta,default=0.0)
    if p<1: raise ValueError('p must be at least 1')
    return sum(value**p for value in delta)**(1/p)

def cosine(x,y):
    dot=sum(a*b for a,b in zip(x,y)); nx=math.sqrt(sum(a*a for a in x)); ny=math.sqrt(sum(b*b for b in y))
    if nx==0 or ny==0: raise ValueError('zero vector')
    return max(-1.0,min(1.0,dot/(nx*ny)))

# ---- Use it ----
import numpy as np
x=np.array([1.,2.,-1.]); y=np.array([3.,0.,2.]); z=np.array([0.,1.,1.])
manual={'l1':lp(x,y,1),'l2':lp(x,y,2),'linf':lp(x,y,math.inf),'cosine':cosine(x,y)}
library={'l1':np.linalg.norm(x-y,1),'l2':np.linalg.norm(x-y,2),'linf':np.linalg.norm(x-y,np.inf),'cosine':float(x@y/(np.linalg.norm(x)*np.linalg.norm(y)))}

# ---- Verify it ----
assert all(math.isclose(manual[k],library[k]) for k in manual)
assert math.isclose(lp(x,y,2),lp(y,x,2))
assert lp(x,z,2)<=lp(x,y,2)+lp(y,z,2)+1e-12
xn=x/np.linalg.norm(x); yn=y/np.linalg.norm(y)
assert math.isclose(np.linalg.norm(xn-yn)**2,2-2*cosine(xn,yn),rel_tol=1e-12)
try: cosine([0.,0.],[1.,0.])
except ValueError: pass
else: raise AssertionError('zero cosine must be defined explicitly')
