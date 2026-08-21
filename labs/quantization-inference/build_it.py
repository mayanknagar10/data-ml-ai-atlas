import torch
m=torch.nn.Sequential(torch.nn.Linear(128,256),torch.nn.ReLU(),torch.nn.Linear(256,10)).eval()
x=torch.randn(32,128); y_fp=m(x)
q=torch.ao.quantization.quantize_dynamic(m,{torch.nn.Linear},dtype=torch.qint8)
y_q=q(x); print((y_fp-y_q).abs().mean().item())
