def bernoulli_mle(k, n):
    if not 0 <= k <= n or n <= 0: raise ValueError('invalid counts')
    return k/n

def beta_posterior(k, n, a, b):
    return a+k, b+n-k

def beta_map(alpha, beta):
    if alpha <= 1 or beta <= 1: raise ValueError('interior MAP formula requires shapes > 1')
    return (alpha-1)/(alpha+beta-2)

k,n,a,b = 1,2,2.0,8.0
alpha,beta = beta_posterior(k,n,a,b)
mle = bernoulli_mle(k,n)
map_est = beta_map(alpha,beta)
post_mean = alpha/(alpha+beta)

# ---- Use it ----
import numpy as np
from scipy.stats import beta as beta_dist
grid = np.linspace(1e-5, 1-1e-5, 200000)
numeric_map = grid[np.argmax(beta_dist.logpdf(grid, alpha, beta))]
scipy_mean = beta_dist.mean(alpha, beta)

# ---- Verify it ----
assert mle == 0.5
assert abs(map_est-0.2) < 1e-12
assert abs(post_mean-0.25) < 1e-12
assert abs(numeric_map-map_est) < 1e-4
assert abs(scipy_mean-post_mean) < 1e-12
