import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import roc_auc_score
rng=np.random.default_rng(4); n=600
x=rng.normal(size=(n,3)); y=(x[:,0]+rng.normal(scale=1.5,size=n)>0).astype(int)
post_outcome=y+rng.normal(scale=.02,size=n); X_leaky=np.c_[x,post_outcome]
tr,te=train_test_split(np.arange(n),test_size=.3,random_state=5,stratify=y)
def auc(X):
    m=LogisticRegression(max_iter=1000).fit(X[tr],y[tr]); return roc_auc_score(y[te],m.predict_proba(X[te])[:,1])
leaky_auc=auc(X_leaky); clean_auc=auc(x)

# ---- Use it ----
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
availability={'signal_0':True,'signal_1':True,'signal_2':True,'post_outcome':False}
allowed=[i for i,name in enumerate(availability) if availability[name]]
model=make_pipeline(StandardScaler(),LogisticRegression(max_iter=1000)).fit(X_leaky[tr][:,allowed],y[tr])
pipeline_auc=roc_auc_score(y[te],model.predict_proba(X_leaky[te][:,allowed])[:,1])

# ---- Verify it ----
assert set(tr).isdisjoint(te) and len(set(tr)|set(te))==n
assert allowed==[0,1,2]
assert leaky_auc>.99
assert abs(pipeline_auc-clean_auc)<1e-12 and clean_auc<leaky_auc-.1
y_shuffled=rng.permutation(y); m=LogisticRegression(max_iter=1000).fit(x[tr],y_shuffled[tr]); shuffled_auc=roc_auc_score(y_shuffled[te],m.predict_proba(x[te])[:,1]); assert abs(shuffled_auc-.5)<.15
