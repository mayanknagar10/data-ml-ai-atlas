import itertools
import numpy as np
def entropy(p):
    p=np.asarray(p,float); p=p/p.sum(); nz=p>0; return float(-np.sum(p[nz]*np.log2(p[nz])))
def mi(table):
    p=np.asarray(table,float); p=p/p.sum(); px=p.sum(1,keepdims=True); py=p.sum(0,keepdims=True); prod=px@py; nz=p>0
    return float(np.sum(p[nz]*np.log2(p[nz]/prod[nz])))
def encoded_joint(pxy,mapping):
    mapping=np.asarray(mapping,int); out=np.zeros((mapping.max()+1,pxy.shape[1]))
    for x,z in enumerate(mapping): out[z]+=pxy[x]
    return out
pxy=.25*np.array([[.9,.1],[.8,.2],[.2,.8],[.1,.9]]); ix_y=mi(pxy)
results=[]
for mapping in itertools.product(range(2),repeat=4):
    pz_y=encoded_joint(pxy,mapping); rate=entropy(pz_y.sum(1)); relevance=mi(pz_y); results.append((mapping,rate,relevance))
beta=3.0; best=min(results,key=lambda row:row[1]-beta*row[2]); grouped=(0,0,1,1); grouped_joint=encoded_joint(pxy,grouped); identity_joint=encoded_joint(pxy,(0,1,2,3))

# ---- Use it ----
from sklearn.metrics import mutual_info_score
samples=np.repeat(np.arange(4),1000); rng=np.random.default_rng(5); ys=np.concatenate([rng.choice(2,1000,p=row/row.sum()) for row in pxy]); zs=np.asarray(grouped)[samples]
sklearn_izy=float(mutual_info_score(zs,ys)/np.log(2))

# ---- Verify it ----
assert mi(identity_joint)==ix_y
assert mi(grouped_joint)<=ix_y+1e-12
assert entropy(grouped_joint.sum(1))==1.0
assert mi(encoded_joint(pxy,(0,0,0,0)))==0.0
assert best[2]>0 and best[1]>0
assert best[0] in (grouped,(1,1,0,0))
assert abs(sklearn_izy-mi(grouped_joint))<.04
assert all(relevance<=ix_y+1e-12 for _,_,relevance in results)
assert ix_y<=entropy(pxy.sum(1))+1e-12
