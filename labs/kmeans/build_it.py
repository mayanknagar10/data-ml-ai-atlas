import numpy as np
rng=np.random.default_rng(0)
X=np.r_[rng.normal([-2,0],.4,(80,2)),rng.normal([2,0],.4,(80,2))]
centers=X[[0,-1]].copy()
for _ in range(20):
    d=((X[:,None,:]-centers[None,:,:])**2).sum(2)
    labels=d.argmin(1)
    centers=np.array([X[labels==k].mean(0) for k in range(2)])
print(centers)
