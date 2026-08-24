import numpy as np
y_train=np.array([10.,12.,11.,13.,12.,14.,13.,15.,14.,16.,15.,17.])
y=np.array([0.1,10.,12.,20.,25.]); pred=np.array([0.3,9.,15.,18.,24.])
e=y-pred; mae=float(np.mean(np.abs(e))); rmse=float(np.sqrt(np.mean(e**2))); bias=float(np.mean(e)); mape=float(np.mean(np.abs(e/y))); wape=float(np.sum(np.abs(e))/np.sum(np.abs(y)))
scale=np.mean(np.abs(y_train[1:]-y_train[:-1])); mase=mae/scale
def pinball(actual,forecast,q):
    err=actual-forecast; return float(np.mean(np.maximum(q*err,(q-1)*err)))
q90=pinball(y,pred+2,.9)

# ---- Use it ----
from sklearn.metrics import mean_absolute_error, mean_squared_error, mean_pinball_loss
official_mae=float(mean_absolute_error(y,pred)); official_rmse=float(np.sqrt(mean_squared_error(y,pred))); official_q90=float(mean_pinball_loss(y,pred+2,alpha=.9))
