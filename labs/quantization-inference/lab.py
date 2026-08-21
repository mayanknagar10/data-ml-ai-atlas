import torch
m=torch.nn.Sequential(torch.nn.Linear(128,256),torch.nn.ReLU(),torch.nn.Linear(256,10)).eval()
x=torch.randn(32,128); y_fp=m(x)
q=torch.ao.quantization.quantize_dynamic(m,{torch.nn.Linear},dtype=torch.qint8)
y_q=q(x); print((y_fp-y_q).abs().mean().item())

# ---- Use it ----
import io
b1=io.BytesIO(); b2=io.BytesIO(); torch.save(m.state_dict(),b1); torch.save(q.state_dict(),b2)
print('bytes fp32/int8',len(b1.getvalue()),len(b2.getvalue()))

# ---- Verify it ----
assert y_q.shape==y_fp.shape
assert torch.isfinite(y_q).all()
