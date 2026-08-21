# f(w)=(w*x-y)^2 -> df/dw=2*(w*x-y)*x
w,x,y=2.0,3.0,10.0
manual=2*(w*x-y)*x
print('manual',manual)

# ---- Use it ----
import torch
wt=torch.tensor(w,requires_grad=True); loss=(wt*x-y)**2; loss.backward()
print('autograd',wt.grad.item())
