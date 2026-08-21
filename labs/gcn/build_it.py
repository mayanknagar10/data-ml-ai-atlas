import numpy as np
A=np.array([[0,1,1],[1,0,0],[1,0,0]],float)
X=np.array([[1.,0.],[0.,1.],[1.,1.]])
Ahat=A+np.eye(3); deg=Ahat.sum(1); D=np.diag(1/np.sqrt(deg)); S=D@Ahat@D
W=np.array([[1.,-.5],[.5,1.]])
H=np.maximum(0,S@X@W)
print(H)
