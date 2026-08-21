import hashlib, math, numpy as np
from collections import Counter
class CountMin:
    def __init__(self,width,depth,seeds=None):
        self.width,self.depth=width,depth; self.seeds=list(range(depth)) if seeds is None else list(seeds); self.table=np.zeros((depth,width),dtype=np.int64); self.total=0
    def _column(self,key,seed):
        raw=f'{seed}|{key}'.encode(); return int.from_bytes(hashlib.blake2b(raw,digest_size=8).digest(),'big')%self.width
    def update(self,key,amount=1):
        if amount<0: raise ValueError('lab uses nonnegative cash-register updates')
        for row,seed in enumerate(self.seeds): self.table[row,self._column(key,seed)]+=amount
        self.total+=amount
    def query(self,key): return int(min(self.table[row,self._column(key,seed)] for row,seed in enumerate(self.seeds)))
    def merge(self,other):
        assert (self.width,self.depth,self.seeds)==(other.width,other.depth,other.seeds)
        out=CountMin(self.width,self.depth,self.seeds); out.table=self.table+other.table; out.total=self.total+other.total; return out
epsilon,delta=.01,.01; width=math.ceil(math.e/epsilon); depth=math.ceil(math.log(1/delta)); stream=['heavy']*5000+[f'key-{i%700}' for i in range(15000)]; exact=Counter(stream)
