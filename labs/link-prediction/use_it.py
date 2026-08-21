import numpy as np
pr=np.array([1.,.2])
reviewers=np.array([[.9,.1],[0.,1.],[.5,.5],[-1.,0.]])
scores=reviewers@pr
rank=np.argsort(-scores)
print(rank,scores[rank])

# ---- Use it ----
true_reviewer=0; k=2
recall_at_k=float(true_reviewer in rank[:k]); print('Recall@2',recall_at_k)
