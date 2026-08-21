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
