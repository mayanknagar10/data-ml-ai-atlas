import hashlib, math, numpy as np
class HyperLogLog:
    def __init__(self,p=10): self.p=p; self.m=1<<p; self.q=64-p; self.registers=np.zeros(self.m,dtype=np.uint8)
    def _hash64(self,value): return int.from_bytes(hashlib.blake2b(str(value).encode(),digest_size=8).digest(),'big')
    def add(self,value):
        h=self._hash64(value); index=h>>self.q; suffix=h&((1<<self.q)-1); rank=self.q-suffix.bit_length()+1 if suffix else self.q+1
        if rank>self.registers[index]: self.registers[index]=rank
    def estimate(self):
        m=self.m; alpha=.7213/(1+1.079/m); raw=alpha*m*m/np.sum(np.exp2(-self.registers.astype(float))); zeros=int(np.count_nonzero(self.registers==0))
        return m*math.log(m/zeros) if zeros and raw<=2.5*m else raw
    def merge(self,other):
        assert self.p==other.p
        out=HyperLogLog(self.p); out.registers=np.maximum(self.registers,other.registers); return out
values=[f'user-{i}' for i in range(50000)]
