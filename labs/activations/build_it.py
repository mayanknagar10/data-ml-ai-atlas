import numpy as np
x=np.array([-3.,-1.,0.,1.,3.])
relu=np.maximum(0,x)
sigmoid=1/(1+np.exp(-x))
tanh=np.tanh(x)
print('relu',relu,'sigmoid',sigmoid,'tanh',tanh)
