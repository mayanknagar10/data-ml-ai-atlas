import math

def vector_f(v):
    x,y=v; return [x*x*y,math.sin(x)+y]

def scalar_f(v):
    x,y=v; return 0.5*(x*x+4*y*y)

def jacobian_fd(f,x,h=1e-6):
    base=f(x); J=[[0.0]*len(x) for _ in base]
    for j in range(len(x)):
        plus=list(x); minus=list(x); plus[j]+=h; minus[j]-=h
        fp,fm=f(plus),f(minus)
        for i in range(len(base)): J[i][j]=(fp[i]-fm[i])/(2*h)
    return J

def gradient_fd(f,x,h=1e-5):
    out=[]
    for j in range(len(x)):
        plus=list(x); minus=list(x); plus[j]+=h; minus[j]-=h
        out.append((f(plus)-f(minus))/(2*h))
    return out

# ---- Use it ----
import numpy as np
x=np.array([1.,2.]); J=np.array(jacobian_fd(vector_f,x.tolist()))
J_true=np.array([[4.,1.],[math.cos(1.),1.]])
H=np.array(jacobian_fd(lambda z: gradient_fd(scalar_f,z),x.tolist(),h=1e-4))
H_true=np.diag([1.,4.]); v=np.array([1.,-1.]); u=np.array([2.,3.])

# ---- Verify it ----
assert np.allclose(J,J_true,atol=1e-8)
assert np.allclose(J@v,[3.,math.cos(1.)-1.],atol=1e-8)
assert np.isclose(u@(J@v),(u@J)@v)
assert np.allclose(H,H_true,atol=1e-5)
assert np.allclose(H,H.T,atol=1e-8)
assert np.all(np.linalg.eigvalsh(H)>0)
grad=np.array([x[0],4*x[1]]); step=np.linalg.solve(H_true,-grad)
assert np.allclose(x+step,[0.,0.])
