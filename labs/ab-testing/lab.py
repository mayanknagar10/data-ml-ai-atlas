from math import erf,sqrt
def normal_cdf(z): return 0.5*(1+erf(z/sqrt(2)))
def ab_proportions(x_t,n_t,x_c,n_c,zcrit=1.95996398454):
    pt,pc=x_t/n_t,x_c/n_c; effect=pt-pc
    se=sqrt(pt*(1-pt)/n_t+pc*(1-pc)/n_c)
    pooled=(x_t+x_c)/(n_t+n_c)
    se0=sqrt(pooled*(1-pooled)*(1/n_t+1/n_c))
    z=effect/se0; pvalue=2*(1-normal_cdf(abs(z)))
    return effect,(effect-zcrit*se,effect+zcrit*se),z,pvalue
def mean_sample_per_arm(sigma,mde,alpha_z=1.96,power_z=0.841621):
    return int(2*sigma*sigma*(alpha_z+power_z)**2/(mde*mde)+0.999999)
report=ab_proportions(1045,10000,1010,10000)
planned_n=mean_sample_per_arm(sqrt(0.1*0.9),0.005)

# ---- Use it ----
from scipy.stats import norm
pooled=(1045+1010)/(10000+10000)
stat=(1045/10000-1010/10000)/(pooled*(1-pooled)*(1/10000+1/10000))**0.5
pvalue=2*norm.sf(abs(stat))

# ---- Verify it ----
effect,interval,z,p=report
assert abs(effect-0.0035)<1e-12
assert interval[0]<effect<interval[1]
assert abs(z-stat)<1e-10 and abs(p-pvalue)<1e-10
assert planned_n>0
assert mean_sample_per_arm(sqrt(0.1*0.9),0.0025)>3*planned_n
reverse=ab_proportions(1010,10000,1045,10000)
assert abs(reverse[0]+effect)<1e-12
assert 0<=p<=1
