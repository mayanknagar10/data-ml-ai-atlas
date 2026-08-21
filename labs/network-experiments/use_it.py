import random
def neighbors(i,n): return ((i-1)%n,(i+1)%n)
def outcome(i,z,direct=1.0,spill=1.5):
    exposure=sum(z[j] for j in neighbors(i,len(z)))/2
    return direct*z[i]+spill*exposure
def individual_assignment(n,seed):
    rng=random.Random(seed); return [rng.randrange(2) for _ in range(n)]
def cluster_assignment(n,cluster_size,seed):
    rng=random.Random(seed); clusters=[rng.randrange(2) for _ in range(n//cluster_size)]
    return [clusters[i//cluster_size] for i in range(n)]
def contrast(z):
    y=[outcome(i,z) for i in range(len(z))]
    return sum(v for v,a in zip(y,z) if a)/sum(z)-sum(v for v,a in zip(y,z) if not a)/(len(z)-sum(z))
def crossing_edges(z): return sum(z[i]!=z[(i+1)%len(z)] for i in range(len(z)))
n=200; zi=individual_assignment(n,7); zc=cluster_assignment(n,10,7)
individual_effect=contrast(zi); cluster_effect=contrast(zc)

# ---- Use it ----
import pandas as pd
summary=pd.DataFrame([{'design':'individual','effect':individual_effect,'crossing':crossing_edges(zi)},{'design':'cluster','effect':cluster_effect,'crossing':crossing_edges(zc)}]).set_index('design')
