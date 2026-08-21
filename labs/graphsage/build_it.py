import numpy as np
X=np.array([[1.,0.],[0.,1.],[1.,1.]])
neighbors={0:[1,2],1:[0],2:[0]}
out=[]
for i in range(len(X)):
    agg=X[neighbors[i]].mean(0)
    out.append(np.concatenate([X[i],agg]))
out=np.stack(out)
print(out)
