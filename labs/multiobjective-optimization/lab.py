def dominates(a,b):
    return all(x<=y for x,y in zip(a,b)) and any(x<y for x,y in zip(a,b))
def pareto(points):
    return [p for i,p in enumerate(points) if not any(j!=i and dominates(q,p) for j,q in enumerate(points))]
def hypervolume_2d(front,reference):
    pts=sorted(pareto(front),key=lambda p:p[0])
    area=0.0; previous_y=reference[1]
    for x,y in pts:
        if y<previous_y:
            area+=(reference[0]-x)*(previous_y-y); previous_y=y
    return area
points=[(0.12,0.20),(0.10,0.35),(0.09,0.70),(0.13,0.50)]
front=pareto(points); hv=hypervolume_2d(front,(0.2,1.0))

# ---- Use it ----
from math import sqrt
from scipy.optimize import minimize
# Trace f1=x^2 versus f2=(x-1)^2 by bounding f2 at several epsilons.
library_front=[]
for epsilon in (0.04,0.16,0.36,0.64,1.0):
    result=minimize(lambda z:z[0]**2,[max(0.0,1-sqrt(epsilon))],bounds=[(0,1)],constraints=[{'type':'ineq','fun':lambda z,e=epsilon:e-(z[0]-1)**2}],method='SLSQP')
    assert result.success
    x=float(result.x[0]); library_front.append((x*x,(x-1)**2))

# ---- Verify it ----
assert set(front)=={(0.12,0.20),(0.10,0.35),(0.09,0.70)}
assert (0.13,0.50) not in front
assert pareto(list(reversed(points)))==list(reversed(front))
assert hv>0
assert len(library_front)==5
assert all(not dominates(a,b) for i,a in enumerate(library_front) for j,b in enumerate(library_front) if i!=j)
assert all(0<=a<=1 and 0<=b<=1 for a,b in library_front)
assert hypervolume_2d(front,(0.25,1.1))>hv
