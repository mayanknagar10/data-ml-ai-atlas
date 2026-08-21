import numpy as np
X=np.array([[3,0,1,0],[2,0,1,0],[0,2,0,2],[0,3,0,1],[1,0,0,0],[0,1,0,1]],float); y=np.array([0,0,1,1,0,1]); alpha=1.0
classes=np.unique(y); class_count=np.array([(y==c).sum() for c in classes],float)
feature_count=np.array([X[y==c].sum(axis=0) for c in classes])
log_prior=np.log(class_count/class_count.sum())
log_theta=np.log((feature_count+alpha)/(feature_count.sum(axis=1,keepdims=True)+alpha*X.shape[1]))
def log_scores(Q): return np.asarray(Q)@log_theta.T+log_prior
def normalize(scores):
    shifted=scores-scores.max(axis=1,keepdims=True); p=np.exp(shifted); return p/p.sum(axis=1,keepdims=True)
scratch_scores=log_scores(X); scratch_prob=normalize(scratch_scores); scratch_pred=classes[scratch_scores.argmax(axis=1)]
