import numpy as np
def rook(rows,cols):
    n=rows*cols; W=np.zeros((n,n))
    for r in range(rows):
        for c in range(cols):
            i=r*cols+c
            for dr,dc in [(-1,0),(1,0),(0,-1),(0,1)]:
                rr,cc=r+dr,c+dc
                if 0<=rr<rows and 0<=cc<cols: W[i,rr*cols+cc]=1
    return W
def moran(x,W):
    z=np.asarray(x,dtype=float)-np.mean(x); return len(z)/W.sum()*(z@W@z)/(z@z)
W=rook(6,6); values=np.repeat(np.arange(6,dtype=float),6); observed=moran(values,W)

# ---- Use it ----
rng=np.random.default_rng(23); permutations=np.array([moran(rng.permutation(values),W) for _ in range(999)]); null=-1/(len(values)-1); p=(1+np.sum(permutations>=observed))/(1+len(permutations))

# ---- Verify it ----
assert np.allclose(W,W.T) and np.all(np.diag(W)==0)
assert observed>.7 and p<=.01
assert abs(permutations.mean()-null)<.03
shuffled=moran(rng.permutation(values),W); assert observed>shuffled
assert abs(moran(values*10+4,W)-observed)<1e-12
constant=np.ones(36); assert np.allclose(constant-constant.mean(),0)
