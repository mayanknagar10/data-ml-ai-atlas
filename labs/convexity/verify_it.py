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

# ---- Use it ----
from scipy.optimize import minimize
result=minimize(objective,[0.0,0.0],jac=gradient,bounds=[(0,3),(0,3)],method='L-BFGS-B')

# ---- Verify it ----
assert all(0<=v<=3 for v in solution)
assert all(b<=a+1e-12 for a,b in zip(history,history[1:]))
assert max(abs(solution[i]-[2,2][i]) for i in range(2))<1e-8
assert result.success
assert max(abs(result.x[i]-solution[i]) for i in range(2))<1e-6
projected=project([solution[i]-gradient(solution)[i] for i in range(2)])
assert max(abs(projected[i]-solution[i]) for i in range(2))<1e-8
