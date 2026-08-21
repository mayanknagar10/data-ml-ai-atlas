import numpy as np
rng=np.random.default_rng(29); n=150000; xs=rng.normal(-.25,1,n); xt=rng.normal(.25,1,n)
def outcome(x): return x*x+.3*x
def predict(x): return .4*x+.2
ls=(predict(xs)-outcome(xs))**2; lt=(predict(xt)-outcome(xt))**2
def normal_pdf(x,mu): return np.exp(-.5*(x-mu)**2)/np.sqrt(2*np.pi)
w=normal_pdf(xs,.25)/normal_pdf(xs,-.25); source_risk=ls.mean(); target_risk=lt.mean(); weighted_risk=np.sum(w*ls)/np.sum(w); ess=w.sum()**2/np.sum(w*w)
