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
