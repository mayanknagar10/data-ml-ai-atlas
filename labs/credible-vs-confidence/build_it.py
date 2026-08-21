import math

def wilson_interval(k,n,z=1.959963984540054):
    p=k/n; denom=1+z*z/n
    center=(p+z*z/(2*n))/denom
    half=z*math.sqrt(p*(1-p)/n+z*z/(4*n*n))/denom
    return center-half,center+half

k,n=3,10
wilson=wilson_interval(k,n)
