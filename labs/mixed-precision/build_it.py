import torch
model=torch.nn.Sequential(torch.nn.Linear(128,256),torch.nn.ReLU(),torch.nn.Linear(256,10)).cuda().eval()
x=torch.randn(64,128,device='cuda')
with torch.inference_mode(), torch.autocast('cuda',dtype=torch.float16):
    y=model(x)
print(y.dtype,y.shape)
