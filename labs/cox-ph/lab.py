import numpy as np
def cox_components(beta,x,time,event):
    x=np.asarray(x,float); time=np.asarray(time,float); event=np.asarray(event,int); b=float(np.asarray(beta).reshape(-1)[0])
    ll=grad=hess=0.0
    for i in np.flatnonzero(event==1):
        xr=x[time>=time[i]]; z=b*xr; m=z.max(); w=np.exp(z-m); sw=w.sum()
        mean=np.sum(w*xr)/sw; var=np.sum(w*(xr-mean)**2)/sw
        ll+=b*x[i]-(m+np.log(sw)); grad+=x[i]-mean; hess-=var
    return ll,grad,hess
def fit_newton(x,time,event,start=0.0):
    b=float(start)
    for _ in range(60):
        _,g,h=cox_components(b,x,time,event)
        step=g/h; b-=step
        if abs(step)<1e-10: break
    return b
def breslow(beta,x,time,event):
    x=np.asarray(x,float); time=np.asarray(time,float); event=np.asarray(event,int)
    ts=np.unique(time[event==1]); inc=np.array([np.sum((time==t)&(event==1))/np.exp(beta*x[time>=t]).sum() for t in ts])
    return ts,np.cumsum(inc)
x=np.array([-1.2,-0.8,-0.3,0.0,0.4,0.7,1.1,1.5]); time=np.array([10,8,7,9,5,6,2,4],float); event=np.array([1,1,0,1,1,0,1,1])
beta_hat=fit_newton(x,time,event)
event_t,H0=breslow(beta_hat,x,time,event)

# ---- Use it ----
from scipy.optimize import minimize
objective=lambda b:-cox_components(b,x,time,event)[0]
jacobian=lambda b:np.array([-cox_components(b,x,time,event)[1]])
fit=minimize(objective,x0=np.array([0.0]),jac=jacobian,method='BFGS')
beta_scipy=float(fit.x[0])

# ---- Verify it ----
assert np.isfinite(beta_hat) and beta_hat>0
assert fit.success and abs(beta_hat-beta_scipy)<1e-6
assert abs(cox_components(beta_hat,x,time,event)[1])<1e-8
perm=np.array([5,2,7,0,3,1,6,4])
assert abs(fit_newton(x[perm],time[perm],event[perm])-beta_hat)<1e-10
assert np.all(np.diff(H0)>=0)
s_high=np.exp(-H0*np.exp(beta_hat*x.max())); s_low=np.exp(-H0*np.exp(beta_hat*x.min()))
assert np.all(s_high<=s_low) and np.all(np.diff(s_high)<=1e-12)
