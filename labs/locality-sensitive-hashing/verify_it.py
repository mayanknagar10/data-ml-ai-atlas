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

# ---- Use it ----
index=defaultdict(set)
for name,sig in sigs.items():
    for key in band_keys(sig): index[key].add(name)
def candidates(query):
    return set().union(*(index.get(key,set()) for key in band_keys(signature(query))))
retrieved=candidates(docs['base'])-{'base'}

# ---- Verify it ----
def jac(x,y): return len(x&y)/len(x|y)
assert jac(docs['base'],docs['near'])==160/220
assert 'near' in retrieved and 'far' not in retrieved
grid=np.linspace(0,1,101); probs=np.array([candidate_probability(float(s)) for s in grid]); assert np.all(np.diff(probs)>=0)
assert candidate_probability(.8)>.99 and candidate_probability(.1)<.01
assert candidate_probability(.6,bands=40,r=4)>candidate_probability(.6,bands=10,r=4)
assert candidate_probability(.6,bands=20,r=8)<candidate_probability(.6,bands=20,r=4)
assert all(len(key[1])==rows_per_band for key in band_keys(sigs['base']))
