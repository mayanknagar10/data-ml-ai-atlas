import numpy as np
def counts(y,score,threshold):
    y=np.asarray(y,int); pred=np.asarray(score)>=threshold
    tp=int(np.sum(pred&(y==1))); fp=int(np.sum(pred&(y==0)))
    fn=int(np.sum((~pred)&(y==1))); tn=int(np.sum((~pred)&(y==0)))
    return tp,fp,fn,tn
def average_precision(y,score):
    order=np.argsort(-np.asarray(score),kind='stable'); yy=np.asarray(y)[order]
    precision=np.cumsum(yy)/(np.arange(len(yy))+1)
    return float(np.sum(precision*yy)/np.sum(yy))
def top_k(y,score,k):
    order=np.argsort(-np.asarray(score),kind='stable')[:k]; tp=np.asarray(y)[order].sum()
    return float(tp/k),float(tp/np.sum(y))
def best_cost_threshold(y,score,c_fp=1,c_fn=8):
    candidates=np.r_[np.inf,np.sort(np.unique(score))[::-1],-np.inf]
    rows=[]
    for h in candidates:
        tp,fp,fn,tn=counts(y,score,h); rows.append((c_fp*fp+c_fn*fn,h))
    return min(rows,key=lambda z:z[0])
y=np.array([0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0])
score=np.array([.05,.2,.91,.8,.08,.1,.7,.6,.03,.25,.15,.35,.65,.12,.55,.18,.02,.3,.45,.5])
ap=average_precision(y,score); p3,r3=top_k(y,score,3); best=best_cost_threshold(y,score)

# ---- Use it ----
from sklearn.metrics import average_precision_score,confusion_matrix
sk_ap=average_precision_score(y,score)
threshold=best[1]
sk_tn,sk_fp,sk_fn,sk_tp=confusion_matrix(y,score>=threshold,labels=[0,1]).ravel()

# ---- Verify it ----
assert abs(ap-sk_ap)<1e-12
assert (p3,r3)==(2/3,2/3)
tp,fp,fn,tn=counts(y,score,threshold)
assert (tp,fp,fn,tn)==(sk_tp,sk_fp,sk_fn,sk_tn)
all_negative_accuracy=np.mean(y==0)
assert all_negative_accuracy==0.85
assert top_k(y,np.zeros_like(score),len(y))[1]==1.0
assert best[0]<=8*np.sum(y)
assert abs(np.mean(y)-0.15)<1e-12
