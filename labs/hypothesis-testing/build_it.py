import math
a=[10,11,9,12,10,11]; b=[13,12,14,11,13,14]
def mean(x): return sum(x)/len(x)
def var(x):
    m=mean(x); return sum((v-m)**2 for v in x)/(len(x)-1)
se=math.sqrt(var(a)/len(a)+var(b)/len(b))
t=(mean(b)-mean(a))/se
print('difference',mean(b)-mean(a),'t statistic',t)
