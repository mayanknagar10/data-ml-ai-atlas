import numpy as np
y=np.array([10.,20.,40.,80.]); p=np.array([12.,18.,35.,90.])
def scorecard(y,p):
    y=np.asarray(y,float); p=np.asarray(p,float); e=y-p
    mae=np.mean(np.abs(e)); mse=np.mean(e**2)
    r2=1-np.sum(e**2)/np.sum((y-y.mean())**2)
    mape=np.mean(np.abs(e/y))*100 if np.all(y!=0) else float('nan')
    wape=np.sum(np.abs(e))/np.sum(np.abs(y))*100 if np.sum(np.abs(y)) else float('nan')
    smape=np.mean(2*np.abs(e)/(np.abs(y)+np.abs(p)))*100
    return {'mae':mae,'rmse':mse**.5,'r2':r2,'mape':mape,'wape':wape,'smape':smape,'bias':np.mean(p-y)}
m=scorecard(y,p)

# ---- Use it ----
from sklearn.metrics import mean_absolute_error,mean_squared_error,r2_score,mean_absolute_percentage_error
sk=[mean_absolute_error(y,p),mean_squared_error(y,p)**.5,r2_score(y,p),100*mean_absolute_percentage_error(y,p)]

# ---- Verify it ----
assert np.allclose([m['mae'],m['rmse'],m['r2'],m['mape']],sk)
assert scorecard(y,y)['mae']==0 and scorecard(y,y)['r2']==1
scaled=scorecard(10*y,10*p); assert abs(scaled['mape']-m['mape'])<1e-12 and abs(scaled['r2']-m['r2'])<1e-12
assert abs(scaled['mae']-10*m['mae'])<1e-12
assert np.isnan(scorecard(np.array([0.,1.]),np.array([1.,1.]))['mape'])
assert scorecard(np.array([0.,2.]),np.array([3.,3.]))['r2']<0
