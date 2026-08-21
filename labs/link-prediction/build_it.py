import numpy as np
pr=np.array([1.,.2])
reviewers=np.array([[.9,.1],[0.,1.],[.5,.5],[-1.,0.]])
scores=reviewers@pr
rank=np.argsort(-scores)
print(rank,scores[rank])
