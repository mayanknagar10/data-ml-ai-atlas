import re
docs=["RAG retrieves evidence before generation","Agents call tools under explicit policies","Evaluation checks grounded task success"]
def toks(s): return set(re.findall(r"[a-z]+",s.lower()))
def score(q,d): return len(toks(q)&toks(d))
query="retrieve evidence for grounded generation"
scores=[score(query,d) for d in docs]
best=max(range(len(docs)),key=scores.__getitem__)
context=docs[best]

# ---- Use it ----
answer={"context":context,"grounded":"evidence" in context.lower()}
trace={"query":query,"doc_id":best,"score":scores[best]}

# ---- Verify it ----
assert best==0
assert answer["grounded"]
assert trace["score"]>0
assert context in docs
