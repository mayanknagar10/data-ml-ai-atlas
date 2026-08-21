import math

def power_iteration(a,start,steps=100):
    v=list(map(float,start))
    for _ in range(steps):
        w=[sum(row[j]*v[j] for j in range(len(v))) for row in a]
        norm=math.sqrt(sum(x*x for x in w))
        if norm==0: raise ValueError('zero iterate')
        v=[x/norm for x in w]
    av=[sum(row[j]*v[j] for j in range(len(v))) for row in a]
    value=sum(v[i]*av[i] for i in range(len(v)))
    return value,v
