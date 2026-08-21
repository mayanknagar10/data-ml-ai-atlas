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

# ---- Use it ----
v=[1.0,1.0]; history=[objective(v)]; rates=[]
for _ in range(800):
    v,eta=step_with_backtracking(v); history.append(objective(v)); rates.append(eta)

def central(i,h=1e-6):
    plus=list(v); minus=list(v); plus[i]+=h; minus[i]-=h
    return (objective(plus)-objective(minus))/(2*h)
