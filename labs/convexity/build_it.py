def objective(z):
    x,y=z; return 0.5*(x*x+10*y*y)-2*x-20*y
def gradient(z):
    x,y=z; return [x-2,10*y-20]
def project(z): return [min(3,max(0,v)) for v in z]
def solve(z,step=0.1,iterations=300):
    history=[objective(z)]
    for _ in range(iterations):
        g=gradient(z); z=project([z[i]-step*g[i] for i in range(2)])
        history.append(objective(z))
    return z,history
solution,history=solve([0.0,0.0])
