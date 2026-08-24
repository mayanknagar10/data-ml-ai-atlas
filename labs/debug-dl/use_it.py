import numpy as np
rng=np.random.default_rng(7)
X=rng.normal(size=(64,3)); true_w=np.array([1.5,-2.,.5]); y=X@true_w
w=np.zeros(3); lr=.08
losses=[]
for _ in range(120):
    pred=X@w; err=pred-y; losses.append(float(np.mean(err**2))); w-=lr*(2/len(X))*(X.T@err)

# ---- Use it ----
final_pred=X@w
final_loss=float(np.mean((final_pred-y)**2))
