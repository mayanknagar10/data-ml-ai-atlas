import math

def power_iteration(a,start,steps=100):
    v=list(map(float,start))
    for _ in range(steps):
        w=[sum(row[j]*v[j] for j in range(len(v))) for row in a]
        norm=math.sqrt(sum(x*x for x in w))
        if norm==0: raise ValueError('zero iterate')
        v=[x/norm for x in w]
    av=[sum(row[j]*v[j] for j in range(len(v))) for row in a]
    value=sum(v[i]*av[i] for i in range(len(v)))
    return value,v

# ---- Use it ----
import numpy as np
A=np.array([[3.,0.],[0.,1.]])
value,vector=power_iteration(A.tolist(),[1.,1.])
U,s,Vt=np.linalg.svd(A,full_matrices=False)
rank1=s[0]*np.outer(U[:,0],Vt[0])
reconstruction=(U*s)@Vt

# ---- Verify it ----
assert abs(value-3.0)<1e-10
assert abs(abs(vector[0])-1.0)<1e-8
assert np.allclose(reconstruction,A)
assert np.allclose(U.T@U,np.eye(2)) and np.allclose(Vt@Vt.T,np.eye(2))
assert np.allclose(s,[3.,1.])
assert np.isclose(np.linalg.norm(A-rank1,2),s[1])
assert np.isclose(np.linalg.norm(A-rank1,'fro')**2,sum(s[1:]**2))
