def key_counts(rows, key):
    counts = {}
    for row in rows:
        value = row[key]
        counts[value] = counts.get(value, 0) + 1
    return counts

def require_unique(rows, key):
    duplicates = [k for k, n in key_counts(rows, key).items() if n > 1]
    if duplicates:
        raise ValueError(f'duplicate {key}: {duplicates[:3]}')
