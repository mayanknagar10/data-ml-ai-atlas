import math

def logsumexp(values):
    if not values: return -math.inf
    m=max(values)
    if m==math.inf: return math.inf
    if m==-math.inf: return -math.inf
    return m+math.log(sum(math.exp(x-m) for x in values))

def softmax(values):
    if not values: return []
    m=max(values)
    if not math.isfinite(m): raise ValueError('softmax requires a finite normalizer')
    weights=[math.exp(x-m) for x in values]
    total=sum(weights)
    return [w/total for w in weights]

def kahan_sum(values):
    total=0.0; correction=0.0
    for value in values:
        adjusted=value-correction; new=total+adjusted
        correction=(new-total)-adjusted; total=new
    return total

def naive_sum(values):
    total=0.0
    for value in values: total+=value
    return total
