import numpy as np
y=np.array([1,1,1,0,0,0,0,0]); pred=np.array([1,0,1,1,0,0,0,0])
def counts(y,p):
    y=np.asarray(y); p=np.asarray(p)
    return {'tp':int(((y==1)&(p==1)).sum()),'fp':int(((y==0)&(p==1)).sum()),'fn':int(((y==1)&(p==0)).sum()),'tn':int(((y==0)&(p==0)).sum())}
def metrics(y,p):
    c=counts(y,p); tp,fp,fn,tn=(c[k] for k in ('tp','fp','fn','tn'))
    div=lambda a,b: float('nan') if b==0 else a/b
    return c|{'accuracy':(tp+tn)/len(y),'precision':div(tp,tp+fp),'recall':div(tp,tp+fn),'specificity':div(tn,tn+fp),'f1':div(2*tp,2*tp+fp+fn)}
m=metrics(y,pred)

# ---- Use it ----
from sklearn.metrics import confusion_matrix,accuracy_score,precision_score,recall_score,f1_score
cm=confusion_matrix(y,pred,labels=[0,1]); sk=(accuracy_score(y,pred),precision_score(y,pred),recall_score(y,pred),f1_score(y,pred))

# ---- Verify it ----
assert m['tp']==2 and m['fp']==1 and m['fn']==1 and m['tn']==4
assert np.allclose([m['accuracy'],m['precision'],m['recall'],m['f1']],sk)
assert cm.tolist()==[[m['tn'],m['fp']],[m['fn'],m['tp']]]
assert metrics(y,y)['accuracy']==1 and metrics(y,y)['f1']==1
all_negative=np.zeros_like(y); assert np.isnan(metrics(y,all_negative)['precision'])
