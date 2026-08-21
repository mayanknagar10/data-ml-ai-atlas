import torch
net=torch.nn.Sequential(
 torch.nn.Conv2d(1,8,3,padding=1),torch.nn.ReLU(),torch.nn.MaxPool2d(2),
 torch.nn.Conv2d(8,16,3,padding=1),torch.nn.ReLU(),torch.nn.AdaptiveAvgPool2d(1),
 torch.nn.Flatten(),torch.nn.Linear(16,3))
x=torch.randn(4,1,64,64); print(net(x).shape)

# ---- Use it ----
# Inspect feature map shape explicitly.
features=net[:3](x); print(features.shape)  # [4, 8, 32, 32]

# ---- Verify it ----
assert net(x).shape==(4,3)
assert features.shape==(4,8,32,32)
