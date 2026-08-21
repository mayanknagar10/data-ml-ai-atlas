def optimize(lr,steps=30):
    x=8.0; hist=[]
    for _ in range(steps):
        grad=2*(x-3)          # d/dx (x-3)^2
        x-=lr*grad; hist.append(x)
    return x,hist
for lr in [0.05,0.4,1.1]:
    print(lr,optimize(lr)[0])

# ---- Use it ----
import torch
x=torch.tensor(8.0,requires_grad=True)
opt=torch.optim.SGD([x],lr=.1)
for _ in range(30):
    opt.zero_grad(); loss=(x-3)**2; loss.backward(); opt.step()
print(x.item())

# ---- Verify it ----
assert abs(optimize(.1,60)[0]-3)<1e-4
