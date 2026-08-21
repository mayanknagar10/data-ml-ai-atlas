def broadcast_shape(a, b):
    out = []
    for left, right in zip(reversed(a), reversed(b)):
        if left != right and left != 1 and right != 1:
            raise ValueError(f'incompatible: {a} and {b}')
        out.append(max(left, right))
    longer = a if len(a) > len(b) else b
    out.extend(reversed(longer[:abs(len(a)-len(b))]))
    return tuple(reversed(out))

# ---- Use it ----
import numpy as np
X = np.array([[1., 10.], [3., 10.], [5., 10.]])
mean = X.mean(axis=0, keepdims=True)
scale = X.std(axis=0, keepdims=True)
safe_scale = np.where(scale == 0, 1.0, scale)
Z = (X - mean) / safe_scale
