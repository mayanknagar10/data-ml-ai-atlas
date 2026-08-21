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
