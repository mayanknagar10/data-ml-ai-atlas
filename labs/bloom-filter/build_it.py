import hashlib, math
class BloomFilter:
    def __init__(self,m,k): self.m,self.k,self.bits=m,k,bytearray(m)
    def _indices(self,key):
        raw=str(key).encode(); digest=hashlib.sha256(raw).digest(); h1=int.from_bytes(digest[:16],'big'); h2=int.from_bytes(digest[16:],'big')|1
        return [(h1+i*h2)%self.m for i in range(self.k)]
    def add(self,key):
        for index in self._indices(key): self.bits[index]=1
    def __contains__(self,key): return all(self.bits[index] for index in self._indices(key))
n=2000; target=.02; m=math.ceil(-n*math.log(target)/(math.log(2)**2)); k=max(1,round(m/n*math.log(2))); bf=BloomFilter(m,k)
inserted={f'known-{i}' for i in range(n)}
for key in inserted: bf.add(key)
