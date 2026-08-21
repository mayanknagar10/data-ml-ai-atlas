import itertools

def mean(xs): return sum(xs)/len(xs)
def exact_difference_test(a,b):
    pooled=list(a)+list(b); n_a=len(a)
    observed=abs(mean(a)-mean(b)); stats=[]
    for idx in itertools.combinations(range(len(pooled)),n_a):
        chosen=set(idx)
        left=[x for i,x in enumerate(pooled) if i in chosen]
        right=[x for i,x in enumerate(pooled) if i not in chosen]
        stats.append(abs(mean(left)-mean(right)))
    p=sum(t >= observed-1e-12 for t in stats)/len(stats)
    return observed,p,stats
a=[8,9,11,12]; b=[3,4,6,7]
observed,p_value,null_stats=exact_difference_test(a,b)
