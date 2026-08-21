import numpy as np
def norm(x): return x/np.linalg.norm(x,axis=1,keepdims=True)
img=norm(np.array([[1.,0.],[0.,1.],[1.,1.]]))
txt=norm(np.array([[.9,.1],[.1,.9],[1.,.8]]))
tau=.1
logits=img@txt.T/tau
print(logits)
