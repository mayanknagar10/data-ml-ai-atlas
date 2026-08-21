import torch, math
B,T,D=2,4,8
x=torch.randn(B,T,D); Wq=torch.randn(D,D); Wk=torch.randn(D,D); Wv=torch.randn(D,D)
Q,K,V=x@Wq,x@Wk,x@Wv
scores=Q@K.transpose(-2,-1)/math.sqrt(D)
weights=scores.softmax(-1); out=weights@V
print(Q.shape,scores.shape,out.shape)
