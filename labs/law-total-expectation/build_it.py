def mixture_moments(weights,means,variances):
    if len(weights)!=len(means) or len(weights)!=len(variances) or abs(sum(weights)-1)>1e-12 or any(w<0 for w in weights): raise ValueError('invalid mixture')
    mean=sum(w*m for w,m in zip(weights,means))
    within=sum(w*v for w,v in zip(weights,variances))
    between=sum(w*(m-mean)**2 for w,m in zip(weights,means))
    return mean,within,between,within+between

def total_probability(weights,conditionals):
    return sum(w*p for w,p in zip(weights,conditionals))
