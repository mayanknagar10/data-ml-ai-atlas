import numpy as np
rng=np.random.default_rng(7); x=np.linspace(-1,1,14); y=np.sin(3*x)+rng.normal(0,.12,len(x)); xt=np.linspace(-.98,.98,400); yt=np.sin(3*xt)
def design(x,degree): return np.vander(np.asarray(x),degree+1,increasing=True)
def fit_erm(x,y,degree): return np.linalg.lstsq(design(x,degree),y,rcond=None)[0]
def mse(y,p): return float(np.mean((np.asarray(y)-np.asarray(p))**2))
degrees=[1,3,5,9,13]; rows=[]
for d in degrees:
    coef=fit_erm(x,y,d); rows.append((d,mse(y,design(x,d)@coef),mse(yt,design(xt,d)@coef)))
train_best=min(rows,key=lambda r:r[1]); test_best=min(rows,key=lambda r:r[2])
