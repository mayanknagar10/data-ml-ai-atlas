def beta_update(a,b,successes,failures):
    return a+successes,b+failures
def gamma_poisson_update(shape,rate,total_count,total_exposure):
    return shape+total_count,rate+total_exposure

a_post,b_post=beta_update(4,6,9,11)
shape_post,rate_post=gamma_poisson_update(3,5,7,20)
beta_mean=a_post/(a_post+b_post)
rate_mean=shape_post/rate_post

# ---- Use it ----
from scipy.stats import beta,gamma
scipy_beta_mean=beta.mean(a_post,b_post)
scipy_rate_mean=gamma.mean(shape_post,scale=1/rate_post)

# ---- Verify it ----
assert (a_post,b_post)==(13,17)
assert abs(beta_mean-scipy_beta_mean) < 1e-12
assert abs(rate_mean-0.4) < 1e-12
assert abs(rate_mean-scipy_rate_mean) < 1e-12
first=beta_update(4,6,4,6)
second=beta_update(*first,5,5)
assert second==(a_post,b_post)
