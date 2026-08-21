import numpy as np
z=np.array([[.1,.9],[.8,.2],[.45,.55]])
codebook=np.array([[0.,1.],[1.,0.],[.5,.5]])
d=((z[:,None,:]-codebook[None,:,:])**2).sum(-1)
idx=d.argmin(1); quantized=codebook[idx]
print(idx,quantized)
