import numpy as np
y=np.array([10.,12.,11.,14.,15.,13.,16.,18.,17.,19.])
train=y[:7]; test=y[7:]
last=np.repeat(train[-1],len(test))
rolling=np.repeat(train[-3:].mean(),len(test))
def mae(a,b): return float(np.mean(np.abs(np.asarray(a)-np.asarray(b))))
last_mae=mae(test,last); rolling_mae=mae(test,rolling)

# ---- Use it ----
errors=test-last
bias=float(np.mean(errors))
scorecard={"last_mae":last_mae,"rolling_mae":rolling_mae,"bias":bias}
