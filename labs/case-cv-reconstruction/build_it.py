import numpy as np
from scipy.ndimage import gaussian_filter1d
rng=np.random.default_rng(41); x=np.zeros(128); x[25:42]=1; x[72:77]=.7; x[95:110]=.4
def forward(signal): return gaussian_filter1d(signal,2)[::4]
y=forward(x)+rng.normal(0,.005,32)
nearest=np.repeat(y,4)
# Tikhonov reconstruction under the known linear forward operator.
H=np.zeros((32,128))
for j in range(128):
    basis=np.zeros(128); basis[j]=1; H[:,j]=forward(basis)
lam=.03; regularized=np.linalg.solve(H.T@H+lam*np.eye(128),H.T@y)
# Deliberately over-sharpen to expose the fidelity/appearance trade-off.
sharpened=np.clip(regularized+20.0*(regularized-gaussian_filter1d(regularized,1)),0,1)
