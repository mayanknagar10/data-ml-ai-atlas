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

# ---- Use it ----
from scipy.special import logsumexp
trusted=logsumexp(logits,axis=1)-logits[np.arange(len(labels)),labels]

# ---- Verify it ----
assert abs(pp-4.0)<1e-12
assert abs(perplexity_from_probabilities(np.ones(5)/5)-5.0)<1e-12
assert perplexity_from_probabilities([1,1,1])==1.0
assert np.allclose(losses,trusted)
combined=corpus_perplexity([10*math.log(2),90*math.log(8)],[10,90]); assert abs(combined-math.exp((10*math.log(2)+90*math.log(8))/100))<1e-12
assert combined!=5.0
assert perplexity_from_probabilities([.5,.5])==2.0
try:
    perplexity_from_probabilities([.5,0])
    raise AssertionError('expected zero-probability failure')
except ValueError:
    pass
