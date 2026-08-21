class Standardizer:
    def fit(self, X):
        import numpy as np
        X = np.asarray(X, dtype=float)
        if X.ndim != 2:
            raise ValueError('expected 2D input')
        self.mean_ = X.mean(axis=0, keepdims=True)
        scale = X.std(axis=0, keepdims=True)
        self.scale_ = np.where(scale == 0, 1.0, scale)
        return self
    def transform(self, X):
        import numpy as np
        X = np.asarray(X, dtype=float)
        if X.ndim != 2 or X.shape[1] != self.mean_.shape[1]:
            raise ValueError('feature mismatch')
        return (X - self.mean_) / self.scale_

# ---- Use it ----
import numpy as np
X = np.array([[1., 5.], [3., 5.], [5., 5.]])
transformer = Standardizer().fit(X)
Z = transformer.transform(X)
validation = transformer.transform([[7., 5.]])

# ---- Verify it ----
assert Z.shape == X.shape
assert np.isfinite(Z).all()
assert np.allclose(Z[:, 0].mean(), 0.0)
assert np.allclose(Z[:, 0].std(), 1.0)
assert np.allclose(Z[:, 1], 0.0)
before = transformer.mean_.copy()
transformer.transform([[9., 5.]])
assert np.array_equal(before, transformer.mean_)
try:
    transformer.transform([[1., 2., 3.]])
except ValueError:
    pass
else:
    raise AssertionError('feature mismatch must fail')
