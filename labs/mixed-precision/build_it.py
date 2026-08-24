import torch
device=torch.device('cuda' if torch.cuda.is_available() else 'cpu')
device_type=device.type
amp_dtype=torch.float16 if device_type=='cuda' else torch.bfloat16
model=torch.nn.Sequential(torch.nn.Linear(128,256),torch.nn.ReLU(),torch.nn.Linear(256,10)).to(device).eval()
x=torch.randn(64,128,device=device)
with torch.inference_mode(), torch.autocast(device_type=device_type,dtype=amp_dtype):
    y=model(x)
