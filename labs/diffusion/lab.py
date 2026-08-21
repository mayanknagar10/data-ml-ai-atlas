import torch
x0=torch.randn(8,3,32,32); eps=torch.randn_like(x0)
alpha_bar=torch.tensor(.6)
xt=alpha_bar.sqrt()*x0+(1-alpha_bar).sqrt()*eps
# A diffusion network would receive (xt,t,condition) and predict eps/v/x0.
print(x0.std().item(),xt.std().item())

# ---- Use it ----
def epsilon_loss(model, x0, t, alpha_bar):
    eps=torch.randn_like(x0)
    a=alpha_bar[t].view(-1,1,1,1)
    xt=a.sqrt()*x0+(1-a).sqrt()*eps
    return torch.nn.functional.mse_loss(model(xt,t),eps)

# ---- Verify it ----
assert xt.shape==x0.shape
assert torch.isfinite(xt).all()
