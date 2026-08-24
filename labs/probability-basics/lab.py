def diagnostic(prevalence,sensitivity,specificity,population=100000):
    if not all(0<=x<=1 for x in (prevalence,sensitivity,specificity)): raise ValueError('probability')
    cases=population*prevalence; noncases=population-cases
    tp=cases*sensitivity; fn=cases-tp; fp=noncases*(1-specificity); tn=noncases-fp
    positive=tp+fp
    return {'tp':tp,'fp':fp,'fn':fn,'tn':tn,'ppv':tp/positive if positive else float('nan')}

def bayes(prior,likelihood,false_positive):
    denominator=likelihood*prior+false_positive*(1-prior)
    return likelihood*prior/denominator

# ---- Use it ----
counts=diagnostic(.01,.90,.95,10000)
posterior=bayes(.01,.90,.05)
low_base=bayes(.001,.90,.05)

# ---- Verify it ----
import math
expected={'tp':90.0,'fp':495.0,'fn':10.0,'tn':9405.0}
assert all(math.isclose(counts[k],v,rel_tol=0,abs_tol=1e-9) for k,v in expected.items())
assert math.isclose(counts['ppv'],90/585,rel_tol=0,abs_tol=1e-15)
assert abs(counts['ppv']-posterior)<1e-15
assert math.isclose(sum(counts[k] for k in ('tp','fp','fn','tn')),10000,abs_tol=1e-9)
assert 0<=posterior<=1 and low_base<posterior
assert bayes(.01,1.0,0.0)==1.0
try: diagnostic(1.1,.9,.9)
except ValueError: pass
else: raise AssertionError('invalid probabilities must fail')
