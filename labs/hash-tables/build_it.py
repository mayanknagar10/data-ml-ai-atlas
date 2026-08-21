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
