import numpy as np
rng=np.random.default_rng(0); n=10000
ability=rng.normal(size=n)
training=(ability+rng.normal(size=n)>.3).astype(int)
salary=2*ability + 1.5*training + rng.normal(size=n)
naive=salary[training==1].mean()-salary[training==0].mean()
print('naive association',naive,'true treatment effect',1.5)

# ---- Use it ----
# Adjust for the confounder with a simple regression.
from sklearn.linear_model import LinearRegression
X=np.c_[training,ability]; m=LinearRegression().fit(X,salary)
print('adjusted training coefficient',m.coef_[0])

# ---- Verify it ----
assert abs(m.coef_[0]-1.5)<.1
assert naive>m.coef_[0]
