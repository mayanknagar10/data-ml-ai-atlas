import numpy as np
y=np.array([10,12,11,13,15,16,14,11,13,12,14,16,17,15],float)
h=7
last=np.repeat(y[-1],h)
seasonal=y[-7:]
print('last',last,'seasonal',seasonal)

# ---- Use it ----
def mae(a,b): return np.mean(np.abs(a-b))
actual=np.array([12,14,13,15,17,18,16],float)
print('MAE last',mae(actual,last),'seasonal',mae(actual,seasonal))

# ---- Verify it ----
assert len(seasonal)==h
