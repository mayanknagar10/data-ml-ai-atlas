import re
from collections import defaultdict
def tokenize(text): return re.findall(r"(?u)\b\w+\b",text.lower())
def build_index(documents):
    raw=defaultdict(lambda:defaultdict(list))
    for doc_id,text in enumerate(documents):
        for pos,term in enumerate(tokenize(text)): raw[term][doc_id].append(pos)
    return {term:[{'doc_id':d,'tf':len(pos),'positions':pos} for d,pos in sorted(by_doc.items())] for term,by_doc in raw.items()}
def intersect(a,b):
    out=[]; i=j=0
    while i<len(a) and j<len(b):
        if a[i]==b[j]: out.append(a[i]); i+=1; j+=1
        elif a[i]<b[j]: i+=1
        else: j+=1
    return out
def and_query(index,terms):
    lists=[[p['doc_id'] for p in index.get(t,[])] for t in map(str.lower,terms)]
    if not lists: return []
    result=lists[0]
    for posting in lists[1:]: result=intersect(result,posting)
    return result
def phrase_query(index,phrase):
    terms=tokenize(phrase); candidates=and_query(index,terms); hits=[]
    lookup={t:{p['doc_id']:set(p['positions']) for p in index.get(t,[])} for t in terms}
    for d in candidates:
        if any(all((p+j) in lookup[t][d] for j,t in enumerate(terms)) for p in lookup[terms[0]][d]): hits.append(d)
    return hits
docs=['Fast vector search','Fast lexical search','Vector search index']; index=build_index(docs)

# ---- Use it ----
from sklearn.feature_extraction.text import CountVectorizer
cv=CountVectorizer(lowercase=True,token_pattern=r'(?u)\b\w+\b'); matrix=cv.fit_transform(docs)
term_counts=matrix.toarray(); vocab=cv.vocabulary_

# ---- Verify it ----
assert and_query(index,['fast','vector'])==[0]
assert phrase_query(index,'vector search')==[0,2]
assert phrase_query(index,'search vector')==[]
assert [p['doc_id'] for p in index['search']]==[0,1,2]
assert all(p['tf']==len(p['positions']) for ps in index.values() for p in ps)
assert term_counts[:,vocab['search']].tolist()==[1,1,1]
assert tokenize('CAFÉ café')==['café','café']
assert and_query(index,['missing'])==[]
