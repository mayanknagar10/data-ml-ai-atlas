import numpy as np
def norm(x):
    x=np.asarray(x,float); return x/np.linalg.norm(x)
image=norm([1.,.2,.1]); texts=np.stack([norm([.9,.2,.1]),norm([0.,1.,.4]),norm([-.5,.1,1.])])
scores=texts@image
best=int(np.argmax(scores))
