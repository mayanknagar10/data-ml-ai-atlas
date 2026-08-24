import numpy as np
rng=np.random.default_rng(5); n=144; t=np.arange(n); y=20+.04*t+3*np.sin(2*np.pi*t/12)+rng.normal(scale=.15,size=n)
def forecasts(history,h,period=12):
    mean=np.full(h,np.mean(history)); naive=np.full(h,history[-1]); slope=(history[-1]-history[0])/(len(history)-1); drift=history[-1]+slope*np.arange(1,h+1); seasonal=np.resize(history[-period:],h); return {'mean':mean,'naive':naive,'drift':drift,'seasonal':seasonal}
errors={k:[] for k in ('mean','naive','drift','seasonal')}
for origin in range(72,n-12,12):
    pred=forecasts(y[:origin],12); actual=y[origin:origin+12]
    for k in errors: errors[k].extend(np.abs(actual-pred[k]))
mae={k:float(np.mean(v)) for k,v in errors.items()}
