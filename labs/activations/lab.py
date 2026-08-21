import numpy as np
x=np.array([-3.,-1.,0.,1.,3.])
relu=np.maximum(0,x)
sigmoid=1/(1+np.exp(-x))
tanh=np.tanh(x)
print('relu',relu,'sigmoid',sigmoid,'tanh',tanh)

# ---- Use it ----
import torch
t=torch.tensor(x,requires_grad=True)
y=torch.nn.functional.gelu(t).sum(); y.backward(); print(t.grad)

# ---- Verify it ----
assert relu[0]==0 and relu[-1]==3
assert np.all((sigmoid>0)&(sigmoid<1))
