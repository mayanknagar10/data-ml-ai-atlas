import torch
x0=torch.randn(256,2); x1=torch.randn(256,2)+torch.tensor([3.,0.])
t=torch.rand(256,1); xt=(1-t)*x0+t*x1; target=x1-x0
model=torch.nn.Sequential(torch.nn.Linear(3,64),torch.nn.Tanh(),torch.nn.Linear(64,2))
opt=torch.optim.Adam(model.parameters(),1e-3)
for _ in range(300):
    pred=model(torch.cat([xt,t],1)); loss=((pred-target)**2).mean()
    opt.zero_grad(); loss.backward(); opt.step()
print(loss.item())
