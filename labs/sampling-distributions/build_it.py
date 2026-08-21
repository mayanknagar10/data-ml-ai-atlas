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
