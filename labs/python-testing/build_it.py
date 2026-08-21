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
