def weighted_mean(values,weights):
    if len(values)!=len(weights) or any(w<=0 for w in weights): raise ValueError('valid weights required')
    return sum(v*w for v,w in zip(values,weights))/sum(weights)

eng=[72.0]*90; support=[60.0]*50
values=eng+support
weights=[10.0]*len(eng)+[2.0]*len(support)
design_mean=weighted_mean(values,weights)
unweighted=sum(values)/len(values)
truth=(900*72+100*60)/1000

# ---- Use it ----
import numpy as np
np_weighted=float(np.average(np.asarray(values),weights=np.asarray(weights)))
weight_effective_n=(sum(weights)**2)/sum(w*w for w in weights)

# ---- Verify it ----
assert abs(design_mean-truth) < 1e-12
assert abs(np_weighted-design_mean) < 1e-12
assert abs(unweighted-truth) > 1.0
assert 0 < weight_effective_n <= len(values)
assert abs(sum(weights)-1000) < 1e-12
