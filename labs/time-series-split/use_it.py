import numpy as np
from sklearn.metrics import mean_absolute_error
y=np.arange(30)+np.sin(np.arange(30))
errors=[]
for cutoff in range(15,27,3):
    train=y[:cutoff]; val=y[cutoff:cutoff+3]
    pred=np.repeat(train[-1],len(val)) # naive baseline
    errors.append(mean_absolute_error(val,pred))
print(errors, np.mean(errors))

# ---- Use it ----
from sklearn.model_selection import TimeSeriesSplit
for tr,va in TimeSeriesSplit(n_splits=4).split(y):
    assert tr.max()<va.min()
