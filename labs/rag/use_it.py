from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
chunks=['refund policy is 30 days','shipping takes 3 days','enterprise SSO uses SAML']
vec=TfidfVectorizer().fit(chunks); X=vec.transform(chunks)
q=vec.transform(['how long can I return an item?'])
idx=cosine_similarity(q,X).ravel().argsort()[::-1][:2]
context=[chunks[i] for i in idx]; print(context)

# ---- Use it ----
# Production replacement: embeddings/vector DB -> optional reranker -> LLM with cited context.
prompt='Answer only from context:\n'+'\n'.join(context)+'\nQuestion: return window?'
print(prompt)
