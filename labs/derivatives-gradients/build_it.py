class Dual:
    def __init__(self,value,tangent=0.0): self.value=float(value); self.tangent=float(tangent)
    def __add__(self,other):
        other=other if isinstance(other,Dual) else Dual(other)
        return Dual(self.value+other.value,self.tangent+other.tangent)
    __radd__=__add__
    def __mul__(self,other):
        other=other if isinstance(other,Dual) else Dual(other)
        return Dual(self.value*other.value,self.tangent*other.value+self.value*other.tangent)
    __rmul__=__mul__

def central_diff(f,x,h=1e-6): return (f(x+h)-f(x-h))/(2*h)
