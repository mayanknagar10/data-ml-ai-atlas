constraints=[(1.0,2.0,40.0),(3.0,2.0,60.0),(1.0,0.0,0.0),(0.0,1.0,0.0)]
# Last two rows represent x=0 and y=0 candidate boundaries.
def intersect(a,b):
    a1,a2,c1=a; b1,b2,c2=b; det=a1*b2-a2*b1
    if abs(det)<1e-12:return None
    return ((c1*b2-a2*c2)/det,(a1*c2-c1*b1)/det)
def feasible(p):
    x,y=p; return x>=-1e-9 and y>=-1e-9 and x+2*y<=40+1e-9 and 3*x+2*y<=60+1e-9
points=[]
for i in range(len(constraints)):
    for j in range(i):
        p=intersect(constraints[i],constraints[j])
        if p is not None and feasible(p):points.append(p)
objective=lambda p:30*p[0]+50*p[1]
solution=max(points,key=objective)

# ---- Use it ----
from scipy.optimize import linprog
result=linprog(c=[-30,-50],A_ub=[[1,2],[3,2]],b_ub=[40,60],bounds=[(0,None),(0,None)],method='highs')
