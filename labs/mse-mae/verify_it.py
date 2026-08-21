import numpy as np
y=np.array([10,10,10,10.])
p1=np.array([9,11,10,30.])
err=p1-y
mae=np.mean(np.abs(err)); mse=np.mean(err**2)
print('errors',err,'MAE',mae,'MSE',mse)

# ---- Use it ----
from sklearn.metrics import mean_absolute_error, mean_squared_error
print(mean_absolute_error(y,p1),mean_squared_error(y,p1))

# ---- Verify it ----
p2=np.array([9,11,10,14.])
assert np.mean((p1-y)**2)-np.mean((p2-y)**2) > np.mean(abs(p1-y))-np.mean(abs(p2-y))
