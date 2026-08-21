import math

def logsumexp(values):
    if not values: return -math.inf
    m=max(values)
    if m==math.inf: return math.inf
    if m==-math.inf: return -math.inf
    return m+math.log(sum(math.exp(x-m) for x in values))

def softmax(values):
    lse=logsumexp(values)
    if not math.isfinite(lse): raise ValueError('softmax requires a finite normalizer')
    return [math.exp(x-lse) for x in values]

def kahan_sum(values):
    total=0.0; correction=0.0
    for value in values:
        adjusted=value-correction; new=total+adjusted
        correction=(new-total)-adjusted; total=new
    return total
