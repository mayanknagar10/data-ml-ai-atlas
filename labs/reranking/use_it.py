import re
import numpy as np
def tok(s): return re.findall(r'(?u)\b\w+\b',s.lower())
def joint_features(query,document,semantic):
    q=tok(query); d=tok(document); overlap=len(set(q)&set(d))/max(1,len(set(q))); exact=int(' '.join(q) in ' '.join(d)); neg_mismatch=int(('not' in d)!=('not' in q))
    return [overlap,exact,float(semantic),neg_mismatch]
def hand_score(feature):
    overlap,exact,semantic,neg=feature; return 1.5*overlap+1.0*exact+semantic-1.2*neg
X=np.array([[1,.8,.9,0],[.7,0,.8,0],[.8,0,.7,1],[.2,0,.1,0],[.9,1,.8,0],[.6,0,.6,1],[.1,0,.2,0],[.75,0,.85,0],[.85,0,.5,1],[.3,0,.4,0],[.95,1,.9,0],[.5,0,.55,1]],float); y=np.array([1,1,0,0,1,0,0,1,0,0,1,0])
query='zx 4817 supports offline'; docs=['zx 4817 supports offline','zx 4818 supports offline','zx 4817 does not support offline','wireless setup']; semantic=[.82,.93,.88,.1]
features=np.array([joint_features(query,d,s) for d,s in zip(docs,semantic)]); hand=np.array([hand_score(f) for f in features])

# ---- Use it ----
from sklearn.linear_model import LogisticRegression
model=LogisticRegression(C=10,random_state=0).fit(X,y); learned=model.predict_proba(features)[:,1]
hand_rank=np.argsort(-hand,kind='stable').tolist(); learned_rank=np.argsort(-learned,kind='stable').tolist()
