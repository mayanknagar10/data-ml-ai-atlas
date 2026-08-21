import torch
x=torch.linspace(-2,2,200).unsqueeze(1); y=(x**2)
model=torch.nn.Sequential(torch.nn.Linear(1,32),torch.nn.ReLU(),torch.nn.Linear(32,1))
opt=torch.optim.Adam(model.parameters(),lr=1e-2)
for _ in range(500):
    opt.zero_grad(); loss=torch.nn.functional.mse_loss(model(x),y); loss.backward(); opt.step()
print('loss',loss.item())

# ---- Use it ----
# Same pattern scales to real tasks: Dataset/DataLoader -> nn.Module -> loss -> optimizer.
print(model(torch.tensor([[1.5]])).item())

# ---- Verify it ----
assert loss.item()<0.02
assert all(p.grad is not None for p in model.parameters())
