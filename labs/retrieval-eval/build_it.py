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
