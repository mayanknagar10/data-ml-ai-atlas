import random

def reservoir(items, k, seed=0):
    rng=random.Random(seed); sample=[]; count=0
    for count,item in enumerate(items,1):
        if count <= k: sample.append(item)
        else:
            j=rng.randrange(count)
            if j < k: sample[j]=item
    return sample,count

class CountMin:
    def __init__(self,width,depth,seeds):
        self.width=width; self.seeds=tuple(seeds); self.rows=[[0]*width for _ in range(depth)]
    def _index(self,key,seed): return hash((seed,key)) % self.width
    def add(self,key,count=1):
        if count < 0: raise ValueError('insertion-only')
        for row,seed in zip(self.rows,self.seeds): row[self._index(key,seed)] += count
    def estimate(self,key): return min(row[self._index(key,seed)] for row,seed in zip(self.rows,self.seeds))
