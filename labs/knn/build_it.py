import numpy as np
X=np.array([[0,0],[0,2],[1,1],[8,8],[9,8],[8,10]],float); y=np.array([0,0,0,1,1,1])
def knn_predict(train_x,train_y,queries,k=3):
    out=[]; probs=[]
    for q in np.asarray(queries,float):
        dist=np.sqrt(np.sum((train_x-q)**2,axis=1)); idx=np.argsort(dist,kind='stable')[:k]
        w=1/np.maximum(dist[idx],1e-12); p=np.sum(w*train_y[idx])/np.sum(w)
        probs.append(p); out.append(int(p>=0.5))
    return np.array(out),np.array(probs)
scratch_pred,scratch_prob=knn_predict(X,y,X,k=3)
