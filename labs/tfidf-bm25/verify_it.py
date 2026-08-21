import math,re
from collections import Counter
def tokens(text): return re.findall(r'(?u)\b\w+\b',text.lower())
def bm25_scores(query,documents,k1=1.2,b=.75):
    docs=[tokens(d) for d in documents]; N=len(docs); avgdl=sum(map(len,docs))/N; terms=set(tokens(query)); out=[]
    df={t:sum(t in d for d in docs) for t in terms}
    for doc in docs:
        counts=Counter(doc); score=0.0
        for t in terms:
            idf=math.log(1+(N-df[t]+.5)/(df[t]+.5)); tf=counts[t]
            norm=k1*(1-b+b*len(doc)/avgdl); score+=idf*tf*(k1+1)/(tf+norm) if tf else 0.0
        out.append(score)
    return out
def saturation(tf,dl,avgdl,k1=1.2,b=.75): return tf*(k1+1)/(tf+k1*(1-b+b*dl/avgdl))
docs=['vector search search system','lexical search inverted index','vector database semantic retrieval','search']; query='vector search'
bm25=bm25_scores(query,docs)

# ---- Use it ----
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
vectorizer=TfidfVectorizer(); matrix=vectorizer.fit_transform(docs); qvec=vectorizer.transform([query])
tfidf=cosine_similarity(qvec,matrix).ravel(); tfidf_rank=tfidf.argsort()[::-1].tolist()

# ---- Verify it ----
assert max(range(len(bm25)),key=bm25.__getitem__)==0
assert bm25_scores('search vector',docs)==bm25
assert all(math.isfinite(v) and v>=0 for v in bm25)
# Repetition has diminishing marginal contribution.
s1,s2,s3=[saturation(t,10,10) for t in (1,2,3)]
assert (s2-s1)>(s3-s2)>0
idf_rare=math.log(1+(4-1+.5)/(1+.5)); idf_common=math.log(1+(4-3+.5)/(3+.5)); assert idf_rare>idf_common
assert tfidf_rank[0]==0 and tfidf[0]>tfidf[3]
assert bm25_scores('missing',docs)==[0.0]*4
