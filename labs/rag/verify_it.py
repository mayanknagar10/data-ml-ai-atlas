from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
chunks=['refund return policy allows 30 days','shipping takes 3 days','enterprise SSO uses SAML']
vec=TfidfVectorizer().fit(chunks); X=vec.transform(chunks)
q=vec.transform(['refund return policy window'])
idx=cosine_similarity(q,X).ravel().argsort()[::-1][:2]
context=[chunks[i] for i in idx]

# ---- Use it ----
# Production replacement: embeddings/vector DB -> optional reranker -> LLM with cited context.
prompt='Answer only from context:\n'+'\n'.join(context)+'\nQuestion: return window?'

# ---- Verify it ----
assert context[0]=='refund return policy allows 30 days'
assert idx[0]==0
assert '30 days' in context[0]
assert 'Answer only from context' in prompt
