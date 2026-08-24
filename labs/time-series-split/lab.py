import numpy as np
y=10+np.sin(np.arange(120)*2*np.pi/12)+np.arange(120)*.03
def expanding_splits(n,n_splits,test_size,gap):
    first=n-n_splits*test_size
    for start in range(first,n,test_size):
        train=np.arange(0,start-gap); test=np.arange(start,start+test_size); yield train,test
splits=list(expanding_splits(len(y),4,12,2)); errors_mean=[]; errors_last=[]
for train,test in splits:
    mean_pred=np.full(len(test),y[train[-12:]].mean()); last_pred=np.full(len(test),y[train[-1]])
    errors_mean.extend(np.abs(y[test]-mean_pred)); errors_last.extend(np.abs(y[test]-last_pred))

# ---- Use it ----
from sklearn.model_selection import TimeSeriesSplit
cv=TimeSeriesSplit(n_splits=4,test_size=12,gap=2); official=list(cv.split(y)); mae_mean=float(np.mean(errors_mean)); mae_last=float(np.mean(errors_last))

# ---- Verify it ----
assert all(np.array_equal(a,c) and np.array_equal(b,d) for (a,b),(c,d) in zip(splits,official))
assert all(train.max()+2<test.min() for train,test in splits)
assert all(np.all(np.diff(train)==1) and np.all(np.diff(test)==1) for train,test in splits)
assert len(errors_mean)==len(errors_last)==48
assert mae_mean>=0 and mae_last>=0
assert splits[-1][1].max()==len(y)-1
