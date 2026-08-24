import torch
device=torch.device('cuda' if torch.cuda.is_available() else 'cpu')
device_type=device.type
amp_dtype=torch.float16 if device_type=='cuda' else torch.bfloat16
model=torch.nn.Sequential(torch.nn.Linear(128,256),torch.nn.ReLU(),torch.nn.Linear(256,10)).to(device).eval()
x=torch.randn(64,128,device=device)
with torch.inference_mode(), torch.autocast(device_type=device_type,dtype=amp_dtype):
    y=model(x)

# ---- Use it ----
# GradScaler is useful for CUDA FP16 training; it is disabled on CPU/BF16.
scaler=torch.amp.GradScaler('cuda',enabled=(device_type=='cuda'))
output_dtype=y.dtype
