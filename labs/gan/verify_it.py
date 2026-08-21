import math
def sigmoid(x): return 1/(1+math.exp(-x))
real_logit=2.0; fake_logit=-1.0
D_real,D_fake=sigmoid(real_logit),sigmoid(fake_logit)
d_loss=-(math.log(D_real)+math.log(1-D_fake))
g_loss=-math.log(D_fake)
print(D_real,D_fake,d_loss,g_loss)

# ---- Use it ----
# In PyTorch, use BCEWithLogitsLoss rather than applying sigmoid manually.
import torch
loss=torch.nn.BCEWithLogitsLoss()(torch.tensor([fake_logit]),torch.ones(1))
print(loss.item())

# ---- Verify it ----
assert D_real>D_fake
assert g_loss>0
