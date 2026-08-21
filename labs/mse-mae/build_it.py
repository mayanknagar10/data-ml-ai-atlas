import numpy as np
y=np.array([0.,0.,0.,8.]); a=np.array([0.,0.,0.,0.]); b=np.array([3.,3.,3.,5.]); w=np.array([1.,1.,1.,2.])
def metrics(y,p,w=None):
    w=np.ones(len(y)) if w is None else np.asarray(w,float); e=np.asarray(y)-np.asarray(p)
    mse=float(np.sum(w*e*e)/w.sum()); mae=float(np.sum(w*np.abs(e))/w.sum())
    return {'mse':mse,'rmse':mse**.5,'mae':mae}
ma=metrics(y,a,w); mb=metrics(y,b,w)
