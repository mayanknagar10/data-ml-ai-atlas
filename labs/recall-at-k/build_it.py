import numpy as np
user=np.array([1.0,0.4,-0.2])
items=np.array([[.9,.3,-.1],[.1,.8,.5],[.7,.2,-.4],[-.2,.1,.9]])
scores=items@user
rank=np.argsort(-scores)
top2=rank[:2]
