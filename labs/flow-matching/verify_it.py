import torch
x0=torch.randn(256,2); x1=torch.randn(256,2)+torch.tensor([3.,0.])
t=torch.rand(256,1); xt=(1-t)*x0+t*x1; target=x1-x0
model=torch.nn.Sequential(torch.nn.Linear(3,64),torch.nn.Tanh(),torch.nn.Linear(64,2))
opt=torch.optim.Adam(model.parameters(),1e-3)
for _ in range(300):
    pred=model(torch.cat([xt,t],1)); loss=((pred-target)**2).mean()
    opt.zero_grad(); loss.backward(); opt.step()
print(loss.item())

# ---- Use it ----
# Euler integration at inference: x <- x + dt * v_theta(x,t)
x=torch.randn(32,2); dt=.05
for i in range(20):
    tcur=torch.full((32,1),i/20)
    with torch.no_grad(): x += dt*model(torch.cat([x,tcur],1))

# ---- Verify it ----
assert torch.isfinite(loss)
assert x.shape==(32,2)
