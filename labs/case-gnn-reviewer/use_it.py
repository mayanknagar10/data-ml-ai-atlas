import numpy as np
from scipy.optimize import linear_sum_assignment
# Three papers each need one reviewer; two slots model capacity for reviewer 0.
content=np.array([[.9,.6,.3],[.8,.4,.7],[.2,.85,.65]])
graph=np.array([[.1,.7,.2],[.5,.2,.8],[.1,.6,.4]])
scores=.7*content+.3*graph
conflicts=np.array([[False,True,False],[False,False,True],[False,False,False]])
slots=[0,0,1,2]; expanded=scores[:,slots].copy()
for p in range(3):
    for j,r in enumerate(slots):
        if conflicts[p,r]: expanded[p,j]=-1e6
rows,cols=linear_sum_assignment(-expanded); assignment=[(int(p),slots[int(c)]) for p,c in zip(rows,cols)]

# ---- Use it ----
capacities={0:2,1:1,2:1}; loads={r:sum(rr==r for _,rr in assignment) for r in capacities}; utility=sum(scores[p,r] for p,r in assignment)
