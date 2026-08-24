import re, math
def tokens(text): return re.findall(r"[a-z0-9']+",text.lower())
docs=["models learn from data","language models use tokens","data pipelines validate schemas"]
vocab=sorted(set(t for d in docs for t in tokens(d)))
def bow(text):
    ts=tokens(text); return [ts.count(v) for v in vocab]
vectors=[bow(d) for d in docs]
