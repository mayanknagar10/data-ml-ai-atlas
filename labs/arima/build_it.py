import numpy as np
from statsmodels.tsa.arima.model import ARIMA
rng=np.random.default_rng(0); y=np.cumsum(rng.normal(size=120))
train,test=y[:100],y[100:]
fit=ARIMA(train,order=(1,1,1)).fit(); pred=fit.forecast(len(test))
print(pred[:3])
