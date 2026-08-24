import numpy as np
image=np.arange(25,dtype=float).reshape(5,5)
kernel=np.array([[1.,0.,-1.],[1.,0.,-1.],[1.,0.,-1.]])
def conv2_valid(img,k):
    h,w=img.shape; kh,kw=k.shape; out=np.empty((h-kh+1,w-kw+1))
    for i in range(out.shape[0]):
        for j in range(out.shape[1]): out[i,j]=np.sum(img[i:i+kh,j:j+kw]*k)
    return out
features=conv2_valid(image,kernel)

# ---- Use it ----
shifted=image+10
shift_features=conv2_valid(shifted,kernel)
