import numpy as np
docs=np.array([[1.,0.],[0.,1.],[.8,.2],[-1.,0.]])
q=np.array([1.,.1])
def norm(x): return x/np.linalg.norm(x,axis=-1,keepdims=True)
scores=norm(docs)@norm(q)
rank=np.argsort(-scores)
print(rank,scores[rank])

# ---- Use it ----
top_k=2
print('retrieved ids',rank[:top_k].tolist())

# ---- Verify it ----
assert rank[0] in (0,2)
assert scores[rank[0]]>scores[rank[-1]]
