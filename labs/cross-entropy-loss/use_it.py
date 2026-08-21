import numpy as np
def log_softmax(logits):
    z=np.asarray(logits,float); m=np.max(z,axis=-1,keepdims=True); return z-m-np.log(np.exp(z-m).sum(axis=-1,keepdims=True))
def cross_entropy_logits(logits,labels):
    logp=log_softmax(logits); labels=np.asarray(labels,int); return -logp[np.arange(len(labels)),labels]
def softmax(logits): return np.exp(log_softmax(logits))
def entropy(p):
    p=np.asarray(p,float); nz=p>0; return -np.sum(p[nz]*np.log(p[nz]))
def kl(p,q):
    p=np.asarray(p,float); q=np.asarray(q,float); nz=p>0; return np.sum(p[nz]*np.log(p[nz]/q[nz]))
logits=np.array([[2.,1.,-1.],[-2.,1.,3.]]); labels=np.array([0,2]); losses=cross_entropy_logits(logits,labels); probs=softmax(logits)
grad=probs-np.eye(3)[labels]
p=np.array([.7,.2,.1]); q=np.array([.6,.3,.1]); cross=-np.sum(p*np.log(q))

# ---- Use it ----
from sklearn.metrics import log_loss
sklearn_loss=log_loss(labels,probs,labels=[0,1,2],normalize=False)/len(labels)
