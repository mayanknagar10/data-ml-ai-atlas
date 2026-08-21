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

# ---- Verify it ----
assert broadcast_shape((3, 1, 5), (4, 5)) == (3, 4, 5)
assert Z.shape == X.shape
assert np.isfinite(Z).all()
assert np.allclose(Z[:, 0].mean(), 0.0)
assert np.allclose(Z[:, 0].std(), 1.0)
assert np.allclose(Z[:, 1], 0.0)
view = X[:, :1]
copy = X[:, [0]]
assert np.shares_memory(X, view)
assert not np.shares_memory(X, copy)
