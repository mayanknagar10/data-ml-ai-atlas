import itertools

def mean(xs): return sum(xs)/len(xs)
def sign_flip_pvalue(differences):
    observed = abs(mean(differences))
    stats = []
    for signs in itertools.product((-1, 1), repeat=len(differences)):
        stats.append(abs(mean([s*x for s,x in zip(signs,differences)])))
    return sum(t >= observed-1e-12 for t in stats)/len(stats), stats

diffs = [1.2, 0.5, 0.9, -0.1, 1.4, 0.7, 0.3, 1.0]
p_value, null_stats = sign_flip_pvalue(diffs)

# ---- Use it ----
import numpy as np
from scipy.stats import permutation_test
result = permutation_test((np.asarray(diffs),), lambda x: np.mean(x), permutation_type='samples', alternative='two-sided', n_resamples=np.inf)
