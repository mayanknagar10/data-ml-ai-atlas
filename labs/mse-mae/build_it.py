import numpy as np
y=np.array([10,10,10,10.])
p1=np.array([9,11,10,30.])
err=p1-y
mae=np.mean(np.abs(err)); mse=np.mean(err**2)
print('errors',err,'MAE',mae,'MSE',mse)
