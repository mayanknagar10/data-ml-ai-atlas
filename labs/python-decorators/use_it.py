from functools import wraps
from time import perf_counter

def timed(record):
    def decorate(fn):
        @wraps(fn)
        def wrapper(*args, **kwargs):
            start = perf_counter()
            try:
                return fn(*args, **kwargs)
            finally:
                record.append((fn.__name__, perf_counter() - start))
        return wrapper
    return decorate

# ---- Use it ----
from contextlib import contextmanager

@contextmanager
def temporary(mapping, key, value):
    missing = object()
    old = mapping.get(key, missing)
    mapping[key] = value
    try:
        yield
    finally:
        if old is missing:
            mapping.pop(key, None)
        else:
            mapping[key] = old
