import math
import numpy as np
def perplexity_from_probabilities(probabilities):
    p=np.asarray(probabilities,float)
    if p.ndim!=1 or len(p)==0 or np.any(p<=0) or np.any(p>1): raise ValueError('invalid observed-token probabilities')
    return float(np.exp(-np.mean(np.log(p))))
def nll_from_logits(logits,labels):
    z=np.asarray(logits,float); labels=np.asarray(labels,int); m=z.max(axis=1,keepdims=True); logsum=m[:,0]+np.log(np.exp(z-m).sum(axis=1))
    return logsum-z[np.arange(len(labels)),labels]
def corpus_perplexity(loss_sums,token_counts):
    counts=np.asarray(token_counts,float)
    if counts.sum()<=0: raise ValueError('no active tokens')
    return float(np.exp(np.sum(loss_sums)/counts.sum()))
p=np.array([.5,.25,.125]); pp=perplexity_from_probabilities(p)
logits=np.array([[2,0,-1],[0,1,2]],float); labels=np.array([0,2]); losses=nll_from_logits(logits,labels)
