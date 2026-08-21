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

# ---- Verify it ----
events = []
@timed(events)
def add(a, b=0):
    'add values'
    return a + b
assert add(2, b=3) == 5
assert add.__name__ == 'add' and add.__doc__ == 'add values'
state = {'mode': 'safe'}
try:
    with temporary(state, 'mode', 'fast'):
        assert state['mode'] == 'fast'
        raise RuntimeError('boom')
except RuntimeError:
    pass
assert state == {'mode': 'safe'}
assert events and events[0][0] == 'add'
