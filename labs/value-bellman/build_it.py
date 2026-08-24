import numpy as np
rewards=[1.,0.,2.,1.,3.,2.,3.,3.]
q=0.; alpha=.25
trace=[]
for r in rewards:
    q=q+alpha*(r-q); trace.append(q)
