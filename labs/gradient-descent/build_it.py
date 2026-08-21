def objective(v):
    x,y=v; return 0.5*(100*x*x+y*y)

def gradient(v):
    x,y=v; return [100*x,y]

def step_with_backtracking(v,start=1.0,c=1e-4):
    g=gradient(v); eta=start; current=objective(v); norm2=sum(value*value for value in g)
    while objective([v[i]-eta*g[i] for i in range(2)]) > current-c*eta*norm2:
        eta*=0.5
        if eta<1e-12: raise RuntimeError('line search failed')
    return [v[i]-eta*g[i] for i in range(2)],eta
