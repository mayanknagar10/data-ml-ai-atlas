import re, math
def tokens(text): return re.findall(r"[a-z0-9']+",text.lower())
docs=["models learn from data","language models use tokens","data pipelines validate schemas"]
vocab=sorted(set(t for d in docs for t in tokens(d)))
def bow(text):
    ts=tokens(text); return [ts.count(v) for v in vocab]
vectors=[bow(d) for d in docs]

# ---- Use it ----
query=bow("language tokens")
def cosine(a,b):
    dot=sum(x*y for x,y in zip(a,b)); na=math.sqrt(sum(x*x for x in a)); nb=math.sqrt(sum(y*y for y in b)); return dot/(na*nb) if na and nb else 0.0
scores=[cosine(query,v) for v in vectors]
best=max(range(len(scores)),key=scores.__getitem__)
