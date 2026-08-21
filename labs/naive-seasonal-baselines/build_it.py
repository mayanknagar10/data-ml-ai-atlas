import numpy as np
y=np.array([10,12,11,13,15,16,14,11,13,12,14,16,17,15],float)
h=7
last=np.repeat(y[-1],h)
seasonal=y[-7:]
print('last',last,'seasonal',seasonal)
