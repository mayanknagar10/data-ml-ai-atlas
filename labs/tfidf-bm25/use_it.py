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
