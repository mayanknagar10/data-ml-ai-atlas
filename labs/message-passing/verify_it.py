import numpy as np
adj=np.array([[0,1,1,0],[1,0,1,0],[1,1,0,1],[0,0,1,0]],float)
x=np.array([[1.,0.],[0.,1.],[1.,1.],[2.,0.]])
deg=adj.sum(1,keepdims=True)
neighbor_mean=(adj@x)/np.maximum(deg,1)

# ---- Use it ----
self_plus=x+neighbor_mean
node2_context=self_plus[2]

# ---- Verify it ----
assert np.allclose(deg.ravel(),[2,2,3,1])
assert np.allclose(neighbor_mean[3],x[2])
assert np.all(np.isfinite(self_plus))
assert node2_context.shape==(2,)
