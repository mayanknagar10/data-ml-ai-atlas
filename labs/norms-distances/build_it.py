import math

def lp(x,y,p):
    if len(x)!=len(y): raise ValueError('shape mismatch')
    delta=[abs(a-b) for a,b in zip(x,y)]
    if p==math.inf: return max(delta,default=0.0)
    if p<1: raise ValueError('p must be at least 1')
    return sum(value**p for value in delta)**(1/p)

def cosine(x,y):
    dot=sum(a*b for a,b in zip(x,y)); nx=math.sqrt(sum(a*a for a in x)); ny=math.sqrt(sum(b*b for b in y))
    if nx==0 or ny==0: raise ValueError('zero vector')
    return max(-1.0,min(1.0,dot/(nx*ny)))
