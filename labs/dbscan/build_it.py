import numpy as np
X=np.array([[0,0],[0,.1],[.1,0],[3,3],[3.1,3],[3,3.1],[8,8]],float); eps=.2; min_samples=3
D=np.sqrt(((X[:,None,:]-X[None,:,:])**2).sum(axis=2)); neighbors=[np.flatnonzero(D[i]<=eps) for i in range(len(X))]; core=np.array([len(n)>=min_samples for n in neighbors]); labels=np.full(len(X),-1,int); cluster=0
for i in range(len(X)):
    if labels[i]!=-1 or not core[i]: continue
    labels[i]=cluster; queue=list(neighbors[i]); seen=set(queue)
    while queue:
        j=queue.pop(0)
        if labels[j]==-1: labels[j]=cluster
        if core[j]:
            for h in neighbors[j]:
                if h not in seen: seen.add(int(h)); queue.append(int(h))
    cluster+=1
