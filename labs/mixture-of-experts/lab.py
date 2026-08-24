import numpy as np
Q=np.array([[1.,0.],[0.,1.]])
K=np.array([[1.,0.],[.5,.5],[0.,1.]])
V=np.array([[2.,0.],[1.,1.],[0.,2.]])
logits=Q@K.T/np.sqrt(Q.shape[1])
weights=np.exp(logits-logits.max(1,keepdims=True)); weights/=weights.sum(1,keepdims=True)
out=weights@V

# ---- Use it ----
row_sums=weights.sum(1)
most_attended=np.argmax(weights,axis=1)

# ---- Verify it ----
assert weights.shape==(2,3)
assert np.allclose(row_sums,1.0)
assert list(most_attended)==[0,2]
assert out.shape==(2,2) and np.all(np.isfinite(out))
