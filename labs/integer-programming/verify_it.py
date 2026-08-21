from itertools import product
sizes=[21,11,15,9,34,25]
values=[22,12,16,10,35,26]
capacity=60
def feasible(bits): return sum(s*b for s,b in zip(sizes,bits))<=capacity
def value(bits): return sum(v*b for v,b in zip(values,bits))
solutions=[bits for bits in product((0,1),repeat=len(sizes)) if feasible(bits)]
best=max(solutions,key=value)
best_value=value(best)

# ---- Use it ----
import numpy as np
from scipy.optimize import Bounds,LinearConstraint,milp
result=milp(c=-np.array(values,dtype=float),integrality=np.ones(len(values)),bounds=Bounds(0,1),constraints=LinearConstraint([sizes],0,capacity))
relaxation=milp(c=-np.array(values,dtype=float),integrality=np.zeros(len(values)),bounds=Bounds(0,1),constraints=LinearConstraint([sizes],0,capacity))

# ---- Verify it ----
assert feasible(best)
assert all(b in (0,1) for b in best)
assert result.success
solver_bits=tuple(int(round(x)) for x in result.x)
assert feasible(solver_bits)
assert value(solver_bits)==best_value
assert abs(-result.fun-best_value)<1e-7
assert -relaxation.fun>=best_value-1e-9
assert -relaxation.fun>best_value
