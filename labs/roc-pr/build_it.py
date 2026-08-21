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
