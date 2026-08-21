import numpy as np
def segment_mean_shifts(y,penalty,min_size=8):
    y=np.asarray(y,float); n=len(y); s=np.r_[0,np.cumsum(y)]; q=np.r_[0,np.cumsum(y*y)]
    def cost(a,b): return q[b]-q[a]-(s[b]-s[a])**2/(b-a)
    dp=np.full(n+1,np.inf); prev=np.full(n+1,-1,int); dp[0]=-penalty
    for t in range(min_size,n+1):
        for a in range(0,t-min_size+1):
            if a!=0 and a<min_size: continue
            if a!=0 and t-a<min_size: continue
            value=dp[a]+cost(a,t)+penalty
            if value<dp[t]: dp[t]=value; prev[t]=a
    cuts=[]; t=n
    while prev[t]>0: cuts.append(int(prev[t])); t=int(prev[t])
    return list(reversed(cuts)),float(dp[n])
rng=np.random.default_rng(10)
y=np.r_[rng.normal(0,.35,60),rng.normal(3,.35,60)]
cuts,obj=segment_mean_shifts(y,penalty=12,min_size=10)

# ---- Use it ----
centered=y-y.mean(); cusum=np.cumsum(centered)
cusum_cut=int(np.argmax(np.abs(cusum[:-1]))+1)
