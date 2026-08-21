import math
n1,x1=5000,500; n2,x2=5000,575
p1,p2=x1/n1,x2/n2
d=p2-p1
se=math.sqrt(p1*(1-p1)/n1+p2*(1-p2)/n2)
lo,hi=d-1.96*se,d+1.96*se
print('uplift',d,'95% CI',lo,hi)

# ---- Use it ----
# scipy can provide a z-test or confidence-interval helpers; the key is
# to define the metric, unit of randomization and stopping rule before peeking.
relative=(x2/n2)/(x1/n1)-1
print('relative uplift',relative)

# ---- Verify it ----
assert lo>0
