import math,re
import numpy as np
from collections import Counter
def tokenize(s): return re.findall(r'(?u)\b\w+\b',s.lower())
def bm25(query,docs,k1=1.2,b=.75):
    tok=[tokenize(d) for d in docs]; terms=set(tokenize(query)); N=len(docs); avg=sum(map(len,tok))/N; out=[]
    for doc in tok:
        c=Counter(doc); score=0.0
        for t in terms:
            df=sum(t in row for row in tok); idf=math.log(1+(N-df+.5)/(df+.5)); tf=c[t]; norm=k1*(1-b+b*len(doc)/avg); score+=idf*tf*(k1+1)/(tf+norm) if tf else 0
        out.append(score)
    return np.asarray(out)
def ranks(scores): return np.argsort(-np.asarray(scores),kind='stable').tolist()
def rrf(rankings,k0=60,weights=None):
    weights=weights or [1.0]*len(rankings); score={}
    for ranking,w in zip(rankings,weights):
        for r,d in enumerate(dict.fromkeys(ranking),1): score[d]=score.get(d,0)+w/(k0+r)
    return sorted(score,key=lambda d:(-score[d],d)),score
docs=['ZX 4817 reset procedure','change your password credentials','troubleshoot wireless router','account recovery guide']
query='ZX 4817 change credentials'; lexical=bm25(query,docs)
emb=np.array([[1,0,0],[.2,.95,0],[0,0,1],[.1,.8,.2]],float); emb/=np.linalg.norm(emb,axis=1,keepdims=True); q=np.array([.55,.8,0]); q/=np.linalg.norm(q)
semantic=emb@q; lex_rank=ranks(lexical); vec_rank=ranks(semantic); fused,fused_scores=rrf([lex_rank[:3],vec_rank[:3]])

# ---- Use it ----
from sklearn.metrics.pairwise import cosine_similarity
sk_cos=cosine_similarity(q.reshape(1,-1),emb).ravel(); scaled_fused,_=rrf([ranks(1000*lexical+7)[:3],ranks(semantic*0.01-4)[:3]])
