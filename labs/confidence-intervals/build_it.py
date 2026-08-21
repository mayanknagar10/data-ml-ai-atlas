import math
import random

def mean(xs): return sum(xs) / len(xs)
def sd(xs):
    m = mean(xs)
    return math.sqrt(sum((x-m)**2 for x in xs)/(len(xs)-1))

def z_interval(xs, critical=1.96):
    m = mean(xs); se = sd(xs)/math.sqrt(len(xs))
    return m-critical*se, m+critical*se

rng = random.Random(11)
mu = 3.0
intervals = [z_interval([rng.gauss(mu, 2.0) for _ in range(80)]) for _ in range(3000)]
