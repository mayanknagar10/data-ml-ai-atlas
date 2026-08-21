import numpy as np
rng=np.random.default_rng(12); x_grid=np.linspace(-1,1,80); truth=np.sin(np.pi*x_grid); noise_sd=0.25
def fit_predict(degree):
    x=rng.uniform(-1,1,35); y=np.sin(np.pi*x)+rng.normal(0,noise_sd,len(x))
    coef=np.polyfit(x,y,degree); return np.polyval(coef,x_grid)
preds={d:np.array([fit_predict(d) for _ in range(250)]) for d in (1,3,12)}
def parts(P):
    mean=P.mean(axis=0); bias2=np.mean((mean-truth)**2); var=np.mean(np.var(P,axis=0)); return bias2,var
decomp={d:parts(P) for d,P in preds.items()}

# ---- Use it ----
observed={}; rng_test=np.random.default_rng(99)
for d,P in preds.items():
    y_test=truth+rng_test.normal(0,noise_sd,size=P.shape)
    observed[d]=float(np.mean((y_test-P)**2))
