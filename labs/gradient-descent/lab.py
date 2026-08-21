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

# ---- Verify it ----
assert all(b<=a+1e-15 for a,b in zip(history,history[1:]))
assert history[-1] < 1e-10
assert max(rates)<=1.0 and min(rates)>0
assert all(abs(central(i)-gradient(v)[i])<1e-8 for i in range(2))
unstable=[1.0,1.0]
for _ in range(5):
    g=gradient(unstable); unstable=[unstable[i]-0.021*g[i] for i in range(2)]
assert abs(unstable[0])>1.0
