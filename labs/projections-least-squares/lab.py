def solve_two_by_two(a,b,c,d,u,v):
    det=a*d-b*c
    if abs(det)<1e-12: raise ValueError('singular')
    return ((u*d-b*v)/det,(a*v-u*c)/det)

def least_squares_line(xs,ys):
    n=len(xs); sx=sum(xs); sxx=sum(x*x for x in xs); sy=sum(ys); sxy=sum(x*y for x,y in zip(xs,ys))
    return solve_two_by_two(n,sx,sx,sxx,sy,sxy)

# ---- Use it ----
import numpy as np
xs=np.array([0.,1.,2.]); y=np.array([1.,2.,2.])
beta=np.array(least_squares_line(xs,y))
A=np.column_stack([np.ones_like(xs),xs])
library,residuals,rank,singular=np.linalg.lstsq(A,y,rcond=None)
fitted=A@beta; residual=y-fitted

# ---- Verify it ----
assert np.allclose(beta,[7/6,1/2])
assert np.allclose(beta,library)
assert rank==2 and singular[-1]>0
assert np.allclose(A.T@residual,[0.,0.],atol=1e-12)
assert np.allclose(fitted+residual,y)
for delta in ([.01,0.],[0.,.01],[-.01,.02]):
    assert np.linalg.norm(A@(beta+delta)-y)>=np.linalg.norm(residual)-1e-12
