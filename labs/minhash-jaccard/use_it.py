import hashlib, numpy as np
rows=512
def jaccard(left,right):
    left,right=set(left),set(right); union=left|right
    return len(left&right)/len(union) if union else 1.0
def hash_value(value,seed):
    return int.from_bytes(hashlib.blake2b(str(value).encode(),digest_size=8,key=seed.to_bytes(8,'big')).digest(),'big')
def signature(values,k=rows):
    unique=sorted(set(values))
    if not unique: raise ValueError('empty set has no minimum')
    return np.array([min(hash_value(value,seed) for value in unique) for seed in range(1,k+1)],dtype=np.uint64)
def estimate(left,right,k=rows): return float(np.mean(signature(left,k)==signature(right,k)))
A=set(range(0,300)); B=set(range(100,400)); exact=jaccard(A,B); approx_64=estimate(A,B,64); approx_512=estimate(A,B,512)

# ---- Use it ----
from sklearn.metrics import jaccard_score
universe=sorted(A|B); y_a=np.array([x in A for x in universe],dtype=int); y_b=np.array([x in B for x in universe],dtype=int)
library_value=jaccard_score(y_a,y_b)
