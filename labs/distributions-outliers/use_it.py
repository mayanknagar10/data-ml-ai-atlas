import statistics

def quantile(xs,p):
    ys=sorted(xs); pos=(len(ys)-1)*p; lo=int(pos); hi=min(lo+1,len(ys)-1); frac=pos-lo
    return ys[lo]*(1-frac)+ys[hi]*frac
def robust_summary(xs):
    med=statistics.median(xs); q1=quantile(xs,0.25); q3=quantile(xs,0.75)
    mad=statistics.median([abs(x-med) for x in xs]); iqr=q3-q1
    flags=[x for x in xs if x<q1-1.5*iqr or x>q3+1.5*iqr]
    return {'mean':statistics.mean(xs),'median':med,'q1':q1,'q3':q3,'iqr':iqr,'mad':mad,'flags':flags}

x=[5,7,8,9,10,11,12,13,14,15,80]
report=robust_summary(x)

# ---- Use it ----
import numpy as np
a=np.asarray(x,float)
numpy_median=float(np.median(a))
numpy_q=np.quantile(a,[0.25,0.75])
