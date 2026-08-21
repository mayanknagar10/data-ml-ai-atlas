import numpy as np
from sklearn.linear_model import LogisticRegression
rng=np.random.default_rng(31); n=14000; x=rng.normal(size=(n,2)); logits=1.1*x[:,0]-.8*x[:,1]; true_ps=1/(1+np.exp(-logits)); a=rng.binomial(1,true_ps); tau=2.; y=tau*a+2*x[:,0]-x[:,1]+rng.normal(size=n)
ps=LogisticRegression(max_iter=2000).fit(x,a).predict_proba(x)[:,1]; w=a/ps+(1-a)/(1-ps)
def weighted_mean(v,weight,mask): return np.sum(weight[mask]*v[mask])/np.sum(weight[mask])
def smd(v,weight):
    m1=weighted_mean(v,weight,a==1); m0=weighted_mean(v,weight,a==0); pooled=np.sqrt((np.var(v[a==1])+np.var(v[a==0]))/2); return (m1-m0)/pooled
before=np.array([smd(x[:,j],np.ones(n)) for j in range(2)]); after=np.array([smd(x[:,j],w) for j in range(2)])

# ---- Use it ----
weighted_effect=weighted_mean(y,w,a==1)-weighted_mean(y,w,a==0); naive=y[a==1].mean()-y[a==0].mean(); effective=w.sum()**2/np.sum(w**2); overlap=np.mean((ps>.05)&(ps<.95))
