import numpy as np
y=np.array([1,0,1,0,1,0]); s=np.array([.95,.80,.70,.60,.40,.10])
def ranked_points(y,s):
    order=np.argsort(-s,kind='stable'); yy=np.asarray(y)[order]; p=yy.sum(); n=len(yy)-p
    tp=np.cumsum(yy==1); fp=np.cumsum(yy==0)
    recall=tp/p; fpr=fp/n; precision=tp/(tp+fp)
    return fpr,recall,precision
fpr,tpr,precision=ranked_points(y,s)
roc_auc=float(np.trapz(np.r_[0,tpr],np.r_[0,fpr]))
ap=float(np.sum(np.diff(np.r_[0,tpr])*precision))

# ---- Use it ----
from sklearn.metrics import roc_auc_score,average_precision_score,roc_curve,precision_recall_curve
sk_roc=roc_auc_score(y,s); sk_ap=average_precision_score(y,s); sk_fpr,sk_tpr,_=roc_curve(y,s)

# ---- Verify it ----
assert abs(roc_auc-sk_roc)<1e-12
assert abs(ap-sk_ap)<1e-12
assert abs(roc_auc_score(y,np.exp(s))-sk_roc)<1e-12
assert abs(roc_auc_score(1-y,-s)-sk_roc)<1e-12
y_more_neg=np.r_[y,np.zeros(20,dtype=int)]; s_more_neg=np.r_[s,np.linspace(.94,.41,20)]
assert average_precision_score(y_more_neg,s_more_neg)<sk_ap
assert np.all(np.diff(sk_fpr)>=0) and np.all(np.diff(sk_tpr)>=0)
