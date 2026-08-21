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

# ---- Use it ----
def graph(w,x=3.0,b=1.0):
    z=w*x+b
    return z*z
w=Dual(2.0,1.0)
loss=graph(w)
analytic=2*(2*3+1)*3
numeric=central_diff(lambda value: graph(value),2.0)

# ---- Verify it ----
assert loss.value==49.0
assert loss.tangent==analytic==42
assert abs(numeric-analytic)<1e-8
for step in (1e-3,1e-4,1e-5):
    assert abs(central_diff(lambda value: graph(value),2.0,step)-analytic)<1e-6
unused=Dual(5.0,1.0)
assert (Dual(2.0,0.0)*unused).tangent==2.0
