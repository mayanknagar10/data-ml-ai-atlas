# Maximize 3*x + 2*y subject to x+y<=4, x<=2, x,y>=0
# Inspect corner points for a tiny LP.
pts=[(0,0),(2,0),(0,4),(2,2)]
best=max(pts,key=lambda p:3*p[0]+2*p[1])
print(best,3*best[0]+2*best[1])

# ---- Use it ----
from scipy.optimize import linprog
res=linprog(c=[-3,-2],A_ub=[[1,1],[1,0]],b_ub=[4,2],bounds=[(0,None),(0,None)])
print(res.x,-res.fun)

# ---- Verify it ----
assert res.success and res.x.sum() <= 4.000001
