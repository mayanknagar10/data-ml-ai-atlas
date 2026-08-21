import math,re
docs=['red bolt m8 stainless','blue bolt m6 steel','m8 stainless anchor bolt']
q='m8 stainless bolt'.split()
tok=[re.findall(r'\w+',doc.lower()) for doc in docs]
N=len(tok); avg=sum(map(len,tok))/N
def bm25(i,k1=1.5,b=.75):
    s=0.0
    for term in q:
        df=sum(term in x for x in tok)
        idf=math.log(1+(N-df+.5)/(df+.5))
        tf=tok[i].count(term)
        if tf:
            s+=idf*tf*(k1+1)/(tf+k1*(1-b+b*len(tok[i])/avg))
    return s
print([bm25(i) for i in range(N)])

# ---- Use it ----
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
v=TfidfVectorizer().fit(docs+[' '.join(q)])
M=v.transform(docs); qq=v.transform([' '.join(q)])
print(cosine_similarity(qq,M)[0])

# ---- Verify it ----
assert max(range(N),key=bm25) in {0,2}
