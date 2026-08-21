import math

def vector_f(v):
    x,y=v; return [x*x*y,math.sin(x)+y]

def scalar_f(v):
    x,y=v; return 0.5*(x*x+4*y*y)

def jacobian_fd(f,x,h=1e-6):
    base=f(x); J=[[0.0]*len(x) for _ in base]
    for j in range(len(x)):
        plus=list(x); minus=list(x); plus[j]+=h; minus[j]-=h
        fp,fm=f(plus),f(minus)
        for i in range(len(base)): J[i][j]=(fp[i]-fm[i])/(2*h)
    return J

def gradient_fd(f,x,h=1e-5):
    out=[]
    for j in range(len(x)):
        plus=list(x); minus=list(x); plus[j]+=h; minus[j]-=h
        out.append((f(plus)-f(minus))/(2*h))
    return out
