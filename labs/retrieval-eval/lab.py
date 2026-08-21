import math
def dedupe(ranking): return list(dict.fromkeys(ranking))
def recall_at_k(ranking,relevant,k):
    relevant=set(relevant); return len(set(dedupe(ranking)[:k])&relevant)/len(relevant) if relevant else 0.0
def reciprocal_rank(ranking,relevant):
    relevant=set(relevant)
    return next((1/i for i,d in enumerate(dedupe(ranking),1) if d in relevant),0.0)
def average_precision(ranking,relevant,k=None):
    relevant=set(relevant); ranked=dedupe(ranking); ranked=ranked if k is None else ranked[:k]
    if not relevant: return 0.0
    hits=0; total=0.0
    for i,d in enumerate(ranked,1):
        if d in relevant: hits+=1; total+=hits/i
    return total/len(relevant)
def dcg(grades,k): return sum((2**g-1)/math.log2(i+1) for i,g in enumerate(grades[:k],1))
def ndcg(grades,k):
    ideal=dcg(sorted(grades,reverse=True),k); return dcg(grades,k)/ideal if ideal else 0.0
ranking=['a','b','c','d']; relevant={'b','c','z'}; grades=[0,3,2,0]
rr=reciprocal_rank(ranking,relevant); ap=average_precision(ranking,relevant); r4=recall_at_k(ranking,relevant,4); n4=ndcg(grades,4)

# ---- Use it ----
import numpy as np
from sklearn.metrics import ndcg_score
# scikit-learn consumes gains directly, so transform grades with the chapter's exponential gain.
y_true=np.array([[2**g-1 for g in grades]],float); y_score=np.array([[4,3,2,1]],float)
sklearn_n4=float(ndcg_score(y_true,y_score,k=4))

# ---- Verify it ----
assert abs(rr-.5)<1e-12
assert abs(ap-((1/2+2/3)/3))<1e-12 and abs(r4-2/3)<1e-12
assert abs(n4-sklearn_n4)<1e-12
assert ndcg(sorted(grades,reverse=True),4)==1.0
assert recall_at_k(['a','a','b'],{'a','b'},2)==1.0
assert reciprocal_rank([],{'x'})==0 and average_precision(['x'],set())==0
assert average_precision(['a','b'],{'a','b'})==1.0
assert 0<=n4<=1
