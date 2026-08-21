from itertools import product
sizes=[21,11,15,9,34,25]
values=[22,12,16,10,35,26]
capacity=60
def feasible(bits): return sum(s*b for s,b in zip(sizes,bits))<=capacity
def value(bits): return sum(v*b for v,b in zip(values,bits))
solutions=[bits for bits in product((0,1),repeat=len(sizes)) if feasible(bits)]
best=max(solutions,key=value)
best_value=value(best)
