import numpy as np
img=np.arange(8*8).reshape(8,8)
patch=4
tokens=[]
for r in range(0,8,patch):
    for c in range(0,8,patch): tokens.append(img[r:r+patch,c:c+patch].reshape(-1))
tokens=np.stack(tokens)
print(tokens.shape)  # 4 patches x 16 pixels
