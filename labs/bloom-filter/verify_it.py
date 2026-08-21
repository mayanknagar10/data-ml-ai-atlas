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

# ---- Use it ----
unseen=[f'unseen-{i}' for i in range(10000)]; false_positives=sum(key in bf for key in unseen); empirical=false_positives/len(unseen); theoretical=(1-math.exp(-k*n/m))**k
# Positive answers are checked against the authoritative set.
def lookup(key):
    if key not in bf: return 'definitely absent'
    return 'present' if key in inserted else 'false positive'

# ---- Verify it ----
assert all(key in bf for key in inserted)
assert lookup('known-19')=='present' and lookup('not-stored') in {'definitely absent','false positive'}
assert abs(theoretical-target)<.005
assert empirical<.04 and abs(empirical-theoretical)<.02
assert bf._indices('known-19')==bf._indices('known-19')
fill=sum(bf.bits)/m; expected_fill=1-math.exp(-k*n/m); assert abs(fill-expected_fill)<.03
