import math

def normalize_log_weights(log_weights):
    peak=max(log_weights); weights=[math.exp(x-peak) for x in log_weights]
    total=sum(weights); return [w/total for w in weights]

def grid_update(grid, prior_weights, successes, failures):
    logs=[]
    for p,w in zip(grid,prior_weights):
        logs.append(math.log(w)+successes*math.log(p)+failures*math.log(1-p))
    return normalize_log_weights(logs)

grid=[(i+0.5)/1000 for i in range(1000)]
prior=[p**(2-1)*(1-p)**(8-1) for p in grid]
prior=[w/sum(prior) for w in prior]
posterior=grid_update(grid,prior,6,14)
grid_mean=sum(p*w for p,w in zip(grid,posterior))

# ---- Use it ----
from scipy.stats import beta
analytic_mean=beta.mean(8,22)
prob_above_025=beta.sf(0.25,8,22)

# ---- Verify it ----
assert abs(sum(posterior)-1.0) < 1e-12
assert abs(grid_mean-analytic_mean) < 2e-4
first=grid_update(grid,prior,2,8)
sequential=grid_update(grid,first,4,6)
assert max(abs(a-b) for a,b in zip(posterior,sequential)) < 1e-12
assert 0 < prob_above_025 < 1
