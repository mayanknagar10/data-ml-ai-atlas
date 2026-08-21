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

# ---- Verify it ----
assert manual==[[4.0,11.0],[13.0,23.0]]
assert np.allclose(manual,np_result)
assert np_result.shape==(2,2)
assert np_result[1,0]==sum(A[1][k]*B[k][0] for k in range(3))
assert np.allclose(I@np_result,np_result)
assert np.allclose((np_result@C)@I,np_result@(C@I))
try: matmul([[1,2]],[[1,2]])
except ValueError: pass
else: raise AssertionError('invalid contraction must fail')
