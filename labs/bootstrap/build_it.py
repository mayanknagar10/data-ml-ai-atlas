import random
import statistics

def bootstrap_statistic(xs, statistic, repeats=5000, seed=17):
    rng = random.Random(seed); n=len(xs)
    return [statistic(rng.choices(xs,k=n)) for _ in range(repeats)]

def percentile_interval(values, level=0.95):
    ys=sorted(values); tail=(1-level)/2
    lo=ys[int(tail*(len(ys)-1))]; hi=ys[int((1-tail)*(len(ys)-1))]
    return lo,hi

x=[8,9,10,10,11,12,13,17,22,30,31,35]
replicates=bootstrap_statistic(x,statistics.median)
interval=percentile_interval(replicates)
