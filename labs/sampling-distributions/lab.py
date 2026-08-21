import math
import random

def repeated_means(population, n, repeats, seed=7):
    rng = random.Random(seed)
    return [sum(rng.choices(population, k=n)) / n for _ in range(repeats)]

def sample_sd(xs):
    mean = sum(xs) / len(xs)
    return math.sqrt(sum((x - mean) ** 2 for x in xs) / (len(xs) - 1))

population = [float(x) for x in range(1, 101)]
means = repeated_means(population, n=25, repeats=4000)

# ---- Use it ----
import numpy as np
rng = np.random.default_rng(7)
array = np.asarray(population)
draws = rng.choice(array, size=(4000, 25), replace=True)
np_means = draws.mean(axis=1)
analytic_se = array.std(ddof=0) / np.sqrt(25)

# ---- Verify it ----
empirical_se = sample_sd(means)
assert abs(empirical_se - analytic_se) / analytic_se < 0.05
assert abs(np_means.std(ddof=1) - analytic_se) / analytic_se < 0.05
assert sample_sd(repeated_means(population, 100, 4000)) < empirical_se
