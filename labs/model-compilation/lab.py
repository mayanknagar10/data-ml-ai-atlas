import numpy as np, time
x=np.arange(20000,dtype=float)
t0=time.perf_counter(); loop=np.array([v*v+2*v for v in x]); loop_t=time.perf_counter()-t0
t0=time.perf_counter(); vec=x*x+2*x; vec_t=time.perf_counter()-t0

# ---- Use it ----
bytes_used=x.nbytes+vec.nbytes
quality_delta=float(np.max(np.abs(loop-vec)))

# ---- Verify it ----
assert np.array_equal(loop,vec)
assert quality_delta==0.0
assert bytes_used>0
assert loop_t>=0 and vec_t>=0
