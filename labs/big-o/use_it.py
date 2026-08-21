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
