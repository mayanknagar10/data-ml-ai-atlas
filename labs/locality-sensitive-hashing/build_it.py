import numpy as np
from collections import defaultdict
rng=np.random.default_rng(17); prime=4294967311; bands,rows_per_band=30,4; k=bands*rows_per_band
a=rng.integers(1,prime,size=k,dtype=np.uint64); b=rng.integers(0,prime,size=k,dtype=np.uint64)
def signature(values):
    vals=np.asarray(sorted(set(values)),dtype=np.uint64)
    return np.min((a[:,None]*vals[None,:]+b[:,None])%prime,axis=1)
def candidate_probability(s,bands=bands,r=rows_per_band): return 1-(1-s**r)**bands
def band_keys(sig): return [(band,tuple(sig[band*rows_per_band:(band+1)*rows_per_band])) for band in range(bands)]
docs={'base':set(range(200)),'near':set(range(40,220)),'far':set(range(1000,1200)),'medium':set(range(140,340))}
sigs={name:signature(values) for name,values in docs.items()}
