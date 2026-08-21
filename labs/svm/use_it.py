import numpy as np
X=np.array([[-3,-2],[-2,-2],[-2,-1],[1,1],[2,1],[2,3]],float); y=np.array([-1,-1,-1,1,1,1],float)
mean=X.mean(axis=0); scale=X.std(axis=0); Z=(X-mean)/scale
w=np.zeros(2); b=0.0; lam=0.02
for epoch in range(3000):
    i=epoch%len(Z); margin=y[i]*(Z[i]@w+b); eta=0.05/(1+epoch/1000)
    if margin<1:
        w-=eta*(lam*w-y[i]*Z[i]); b+=eta*y[i]
    else:
        w-=eta*lam*w
scores=Z@w+b; scratch_pred=np.where(scores>=0,1,-1)

# ---- Use it ----
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.svm import LinearSVC
model=make_pipeline(StandardScaler(),LinearSVC(C=1.0,dual='auto',random_state=0,max_iter=10000)).fit(X,y)
sk_pred=model.predict(X)
