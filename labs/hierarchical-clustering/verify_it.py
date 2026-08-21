import numpy as np
X=np.array([[0,0],[0,1],[1,0],[7,7],[8,7],[7,8]],float)
def avg_distance(A,B):
    return float(np.mean([np.linalg.norm(X[i]-X[j]) for i in A for j in B]))
clusters=[(i,) for i in range(len(X))]; merges=[]
while len(clusters)>1:
    candidates=[(avg_distance(clusters[i],clusters[j]),i,j) for i in range(len(clusters)) for j in range(i+1,len(clusters))]
    dist,i,j=min(candidates); A,B=clusters[i],clusters[j]; merges.append((A,B,dist))
    clusters=[c for h,c in enumerate(clusters) if h not in (i,j)]+[tuple(sorted(A+B))]
assert len(merges)==len(X)-1

# ---- Use it ----
from sklearn.cluster import AgglomerativeClustering
model=AgglomerativeClustering(n_clusters=2,linkage='ward').fit(X); labels=model.labels_

# ---- Verify it ----
assert len(merges)==5
assert sorted(len(A)+len(B) for A,B,_ in merges)[-1]==len(X)
assert labels[0]==labels[1]==labels[2]
assert labels[3]==labels[4]==labels[5]
assert labels[0]!=labels[3]
assert len(model.children_)==len(X)-1
assert all(np.isfinite(d) and d>=0 for _,_,d in merges)
