def dedupe_scan(items):
    out = []
    for item in items:
        if item not in out:
            out.append(item)
    return out

def dedupe_hash(items):
    out, seen = [], set()
    for item in items:
        if item not in seen:
            seen.add(item)
            out.append(item)
    return out

# ---- Use it ----
from time import perf_counter

def timed(fn, data):
    start = perf_counter()
    result = fn(data)
    return result, perf_counter() - start

sizes = [500, 1000, 2000]
measurements = {n: (timed(dedupe_scan, list(range(n)))[1], timed(dedupe_hash, list(range(n)))[1]) for n in sizes}

# ---- Verify it ----
data = [3, 1, 3, 2, 1]
expected = [3, 1, 2]
assert dedupe_scan(data) == expected
assert dedupe_hash(data) == expected
for n in [0, 1, 10, 100]:
    values = list(range(n))
    assert dedupe_scan(values) == dedupe_hash(values)
assert set(measurements) == {500, 1000, 2000}
