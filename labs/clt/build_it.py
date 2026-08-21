import math

def mean(values): return sum(values)/len(values)

def interval(sample,z=1.96):
    m=mean(sample); variance=sum((x-m)**2 for x in sample)/(len(sample)-1); se=math.sqrt(variance/len(sample))
    return m-z*se,m+z*se
