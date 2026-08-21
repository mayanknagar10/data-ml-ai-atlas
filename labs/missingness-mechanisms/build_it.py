import random

def mean(xs): return sum(xs)/len(xs)
def simulate(seed=41,n=20000):
    rng=random.Random(seed); rows=[]
    for _ in range(n):
        group=int(rng.random()<0.4)
        y=10+5*group+rng.gauss(0,1)
        observed_mcar=rng.random()<0.6
        observed_mar=rng.random()<(0.8 if group==0 else 0.25)
        rows.append((group,y,observed_mcar,observed_mar))
    return rows
rows=simulate()
truth=mean([r[1] for r in rows])
mcar_mean=mean([r[1] for r in rows if r[2]])
mar_complete=mean([r[1] for r in rows if r[3]])
# Standardize observed group means to known population group shares.
shares={g:sum(r[0]==g for r in rows)/len(rows) for g in (0,1)}
observed_means={g:mean([r[1] for r in rows if r[0]==g and r[3]]) for g in (0,1)}
adjusted=sum(shares[g]*observed_means[g] for g in (0,1))
