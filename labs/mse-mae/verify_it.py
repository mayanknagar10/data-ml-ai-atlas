import numpy as np
y=np.array([0.,0.,0.,8.]); a=np.array([0.,0.,0.,0.]); b=np.array([3.,3.,3.,5.]); w=np.array([1.,1.,1.,2.])
def metrics(y,p,w=None):
    w=np.ones(len(y)) if w is None else np.asarray(w,float); e=np.asarray(y)-np.asarray(p)
    mse=float(np.sum(w*e*e)/w.sum()); mae=float(np.sum(w*np.abs(e))/w.sum())
    return {'mse':mse,'rmse':mse**.5,'mae':mae}
ma=metrics(y,a,w); mb=metrics(y,b,w)

# ---- Use it ----
from sklearn.metrics import mean_squared_error,mean_absolute_error
sk_mse=mean_squared_error(y,a,sample_weight=w); sk_mae=mean_absolute_error(y,a,sample_weight=w)

# ---- Verify it ----
assert abs(ma['mse']-sk_mse)<1e-12 and abs(ma['mae']-sk_mae)<1e-12
assert abs(ma['rmse']**2-ma['mse'])<1e-12
assert ma['rmse']>=ma['mae']
grid=np.linspace(-1,9,1001); sq=np.array([np.mean((y-v)**2) for v in grid]); ab=np.array([np.mean(np.abs(y-v)) for v in grid])
assert abs(grid[sq.argmin()]-y.mean())<.011
assert 0<=grid[ab.argmin()]<=0.01
assert metrics(y,y)['mse']==metrics(y,y)['mae']==0
