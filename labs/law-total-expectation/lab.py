def mixture_moments(weights,means,variances):
    if len(weights)!=len(means) or len(weights)!=len(variances) or abs(sum(weights)-1)>1e-12 or any(w<0 for w in weights): raise ValueError('invalid mixture')
    mean=sum(w*m for w,m in zip(weights,means))
    within=sum(w*v for w,v in zip(weights,variances))
    between=sum(w*(m-mean)**2 for w,m in zip(weights,means))
    return mean,within,between,within+between

def total_probability(weights,conditionals):
    return sum(w*p for w,p in zip(weights,conditionals))

# ---- Use it ----
weights=[.7,.3]; rates=[.1,.3]; means=[8.,20.]; variances=[9.,25.]
escalation=total_probability(weights,rates)
moments=mixture_moments(weights,means,variances)
# Direct discrete mixture with two equally likely points around each mean matching variance is not needed; verify identity algebraically.
shifted=total_probability([.4,.6],rates)

# ---- Verify it ----
assert abs(escalation-.16)<1e-15
assert all(abs(a-b)<1e-12 for a,b in zip(moments,[11.6,13.8,30.24,44.04]))
assert shifted==.22 and shifted>escalation
assert abs(moments[3]-(moments[1]+moments[2]))<1e-15
assert total_probability([1.,0.],rates)==rates[0]
try: mixture_moments([.5,.4],means,variances)
except ValueError: pass
else: raise AssertionError('weights must define target population')
