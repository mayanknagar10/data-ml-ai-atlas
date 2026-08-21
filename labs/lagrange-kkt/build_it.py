def objective(z):
    x,y=z; return (x-1)**2+(y-2)**2
def constraint(z):
    x,y=z; return 4-x-y  # required <= 0
def kkt_residuals(z,lam):
    x,y=z
    stationarity=max(abs(2*(x-1)-lam),abs(2*(y-2)-lam))
    return {'primal':max(0,constraint(z)),'dual':max(0,-lam),'stationarity':stationarity,'complementarity':abs(lam*constraint(z))}
solution=[1.5,2.5]; multiplier=1.0
certificate=kkt_residuals(solution,multiplier)
