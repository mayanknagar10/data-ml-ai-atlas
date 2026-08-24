import numpy as np
adj=np.array([[0,1,1,0],[1,0,1,0],[1,1,0,1],[0,0,1,0]],float)
x=np.array([[1.,0.],[0.,1.],[1.,1.],[2.,0.]])
deg=adj.sum(1,keepdims=True)
neighbor_mean=(adj@x)/np.maximum(deg,1)
