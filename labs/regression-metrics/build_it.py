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
