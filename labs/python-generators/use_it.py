def batches(items, size):
    if size <= 0:
        raise ValueError('size must be positive')
    batch = []
    for item in items:
        batch.append(item)
        if len(batch) == size:
            yield batch
            batch = []
    if batch:
        yield batch

# ---- Use it ----
from itertools import chain, islice
source = (n * n for n in range(10))
first_three = list(islice(source, 3))
rest = list(source)
rebuilt = list(chain(first_three, rest))
