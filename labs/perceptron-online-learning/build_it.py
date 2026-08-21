import numpy as np
X=np.array([[-3,-1],[-2,-2],[-1,-2],[1,2],[2,1],[3,2]],float); y=np.array([-1,-1,-1,1,1,1])
def train(X,y,epochs=20):
    w=np.zeros(X.shape[1]); b=0.0; wsum=np.zeros_like(w); bsum=0.0; steps=0; mistakes=[]
    for _ in range(epochs):
        count=0
        for xi,yi in zip(X,y):
            if yi*(xi@w+b)<=0: w+=yi*xi; b+=yi; count+=1
            wsum+=w; bsum+=b; steps+=1
        mistakes.append(count)
    return w,b,wsum/steps,bsum/steps,mistakes
w,b,wavg,bavg,mistakes=train(X,y); scratch_pred=np.where(X@wavg+bavg>=0,1,-1)
