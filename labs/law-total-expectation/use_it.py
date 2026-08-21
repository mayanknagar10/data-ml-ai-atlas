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
