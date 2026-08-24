import numpy as np
user=np.array([1.0,0.4,-0.2])
items=np.array([[.9,.3,-.1],[.1,.8,.5],[.7,.2,-.4],[-.2,.1,.9]])
scores=items@user
rank=np.argsort(-scores)
top2=rank[:2]

# ---- Use it ----
def recall_at_k(relevant,ranking,k):
    return len(set(relevant)&set(ranking[:k]))/max(1,len(set(relevant)))
recall=recall_at_k({0,2},rank,2)
