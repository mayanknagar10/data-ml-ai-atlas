class HashMap:
    def __init__(self, capacity=4):
        self.buckets = [[] for _ in range(capacity)]
        self.size = 0
    def _bucket(self, key):
        return self.buckets[hash(key) % len(self.buckets)]
    def put(self, key, value):
        bucket = self._bucket(key)
        for index, (stored, _) in enumerate(bucket):
            if stored == key:
                bucket[index] = (key, value)
                return
        bucket.append((key, value)); self.size += 1
    def get(self, key):
        for stored, value in self._bucket(key):
            if stored == key:
                return value
        raise KeyError(key)
    def delete(self, key):
        bucket = self._bucket(key)
        for index, (stored, _) in enumerate(bucket):
            if stored == key:
                bucket.pop(index); self.size -= 1; return
        raise KeyError(key)

# ---- Use it ----
from collections import Counter
events = [('e1', 'click'), ('e2', 'view'), ('e1', 'click')]
seen = set()
counts = Counter()
for event_id, kind in events:
    if event_id in seen:
        continue
    seen.add(event_id)
    counts[kind] += 1

# ---- Verify it ----
class CollisionKey:
    def __init__(self, value): self.value = value
    def __hash__(self): return 1
    def __eq__(self, other): return isinstance(other, CollisionKey) and self.value == other.value
m = HashMap(2)
a, b = CollisionKey('a'), CollisionKey('b')
m.put(a, 1); m.put(b, 2)
assert m.get(a) == 1 and m.get(b) == 2
m.put(a, 3)
assert m.get(a) == 3 and m.size == 2
m.delete(b)
try: m.get(b)
except KeyError: pass
else: raise AssertionError('deleted key remained')
assert counts == {'click': 1, 'view': 1}
