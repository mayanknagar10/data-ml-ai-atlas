def matmul(a,b):
    if not a or not b or len(a[0])!=len(b): raise ValueError('shape mismatch')
    if any(len(row)!=len(a[0]) for row in a) or any(len(row)!=len(b[0]) for row in b): raise ValueError('ragged')
    return [[sum(a[i][k]*b[k][j] for k in range(len(b))) for j in range(len(b[0]))] for i in range(len(a))]

def transpose(a):
    return [list(col) for col in zip(*a)]

# ---- Use it ----
import numpy as np
A=[[1.,2.,3.],[4.,5.,6.]]
B=[[2.,0.],[1.,1.],[0.,3.]]
manual=matmul(A,B)
np_result=np.asarray(A)@np.asarray(B)
I=np.eye(2)
C=np.array([[1.,2.],[0.,1.]])
