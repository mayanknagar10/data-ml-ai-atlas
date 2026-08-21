import heapq
import numpy as np
rng=np.random.default_rng(31); angles=np.linspace(0,4*np.pi,180); radii=np.linspace(.2,3,180)
data=np.c_[radii*np.cos(angles),radii*np.sin(angles)]+rng.normal(scale=.015,size=(180,2))
queries=data[rng.choice(len(data),20,replace=False)]+rng.normal(scale=.04,size=(20,2))
def knn_graph(data,M=8):
    dist=((data[:,None,:]-data[None,:,:])**2).sum(2); np.fill_diagonal(dist,np.inf); graph=[set(np.argsort(row)[:M]) for row in dist]
    for i,neighbors in enumerate(list(graph)):
        for j in neighbors: graph[j].add(i)
    return [sorted(v) for v in graph]
def graph_search(data,graph,q,k,ef,entry=0):
    distance=lambda i:float(np.sum((data[i]-q)**2)); candidates=[(distance(entry),entry)]; best=[(-distance(entry),entry)]; visited={entry}
    while candidates:
        d,i=heapq.heappop(candidates)
        if len(best)>=ef and d>-best[0][0]: break
        for j in graph[i]:
            if j in visited: continue
            visited.add(j); dj=distance(j)
            if len(best)<ef or dj<-best[0][0]:
                heapq.heappush(candidates,(dj,j)); heapq.heappush(best,(-dj,j))
                if len(best)>ef: heapq.heappop(best)
    return [i for _,i in sorted([(-neg,i) for neg,i in best])[:k]],len(visited)
def exact(data,q,k): return np.argsort(((data-q)**2).sum(1))[:k].tolist()
graph=knn_graph(data); K=5
small=[graph_search(data,graph,q,K,10)[0] for q in queries]; broad=[graph_search(data,graph,q,K,len(data))[0] for q in queries]; truth=[exact(data,q,K) for q in queries]
def recall(rows,truth): return np.mean([len(set(a)&set(e))/len(e) for a,e in zip(rows,truth)])

# ---- Use it ----
small_recall=recall(small,truth); broad_recall=recall(broad,truth)
visited_small=np.mean([graph_search(data,graph,q,K,10)[1] for q in queries]); visited_broad=np.mean([graph_search(data,graph,q,K,len(data))[1] for q in queries])
