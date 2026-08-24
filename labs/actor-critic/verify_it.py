import numpy as np
rewards=[1.,0.,2.,1.,3.,2.,3.,3.]
q=0.; alpha=.25
trace=[]
for r in rewards:
    q=q+alpha*(r-q); trace.append(q)

# ---- Use it ----
discount=.9
returns=[]; g=0.
for r in reversed(rewards):
    g=r+discount*g; returns.append(g)
returns=list(reversed(returns))

# ---- Verify it ----
assert len(trace)==len(rewards)
assert min(rewards)<=q<=max(rewards)
assert returns[0]>rewards[0]
assert all(np.isfinite(trace))
