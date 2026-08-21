import numpy as np
from math import log
def c_factor(n):
    if n<=1:return 0.0
    if n==2:return 1.0
    return 2*(log(n-1)+0.5772156649)-2*(n-1)/n
def build_tree(X,rng,depth,max_depth):
    X=np.asarray(X,float)
    valid=np.flatnonzero(X.max(0)>X.min(0))
    if len(X)<=1 or depth>=max_depth or len(valid)==0:
        return ('leaf',len(X))
    j=int(rng.choice(valid)); split=float(rng.uniform(X[:,j].min(),X[:,j].max()))
    left=X[X[:,j]<split]; right=X[X[:,j]>=split]
    return ('node',j,split,build_tree(left,rng,depth+1,max_depth),build_tree(right,rng,depth+1,max_depth))
def path_length(x,tree,depth=0):
    if tree[0]=='leaf': return depth+c_factor(tree[1])
    _,j,split,left,right=tree
    return path_length(x,left if x[j]<split else right,depth+1)
def isolation_scores(train,query,trees=160,sample_size=64,seed=3):
    rng=np.random.default_rng(seed); n=min(sample_size,len(train)); forest=[]
    for _ in range(trees):
        sample=train[rng.choice(len(train),n,replace=False)]
        forest.append(build_tree(sample,rng,0,int(np.ceil(np.log2(n)))))
    paths=np.array([[path_length(x,t) for t in forest] for x in query])
    return 2**(-paths.mean(1)/c_factor(n))
rng=np.random.default_rng(5)
normal=rng.normal(0,.7,size=(200,2)); X=np.vstack([normal,[[6,6],[-6,-5]]])
score=isolation_scores(X,X)

# ---- Use it ----
from sklearn.ensemble import IsolationForest
sk=IsolationForest(n_estimators=160,max_samples=64,contamination='auto',random_state=3).fit(X)
sk_score=-sk.score_samples(X)

# ---- Verify it ----
assert np.all((score>0)&(score<=1))
assert np.all(score[-2:]>np.quantile(score[:-2],.95))
assert np.all(sk_score[-2:]>np.quantile(sk_score[:-2],.95))
assert np.allclose(score,isolation_scores(X,X,seed=3))
shift=np.array([100,-37])
shift_score=isolation_scores(X+shift,X+shift,seed=3)
assert np.allclose(score,shift_score,atol=1e-12)
assert set(np.argsort(score)[-2:])=={200,201}
assert set(np.argsort(sk_score)[-2:])=={200,201}
