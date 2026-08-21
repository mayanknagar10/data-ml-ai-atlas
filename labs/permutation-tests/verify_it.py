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

# ---- Use it ----
import numpy as np
from scipy.stats import permutation_test
res=permutation_test((np.asarray(a),np.asarray(b)),lambda x,y: np.mean(x)-np.mean(y),permutation_type='independent',alternative='two-sided',n_resamples=np.inf)

# ---- Verify it ----
import math
assert len(null_stats)==math.comb(len(a)+len(b),len(a))
assert 0 <= p_value <= 1
assert abs(p_value-res.pvalue) < 1e-12
assert exact_difference_test(a,a)[1] == 1.0
