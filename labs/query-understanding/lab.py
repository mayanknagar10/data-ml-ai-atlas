import math,re
def levenshtein(a,b):
    prev=list(range(len(b)+1))
    for i,ca in enumerate(a,1):
        cur=[i]
        for j,cb in enumerate(b,1): cur.append(min(cur[-1]+1,prev[j]+1,prev[j-1]+(ca!=cb)))
        prev=cur
    return prev[-1]
def protected(token): return bool(re.fullmatch(r'(?=.*[A-Za-z])(?=.*\d)[A-Za-z0-9-]+',token))
def suggest(token,frequencies):
    if token in frequencies or protected(token): return token
    return max(frequencies,key=lambda c:(-3*levenshtein(token,c)+math.log1p(frequencies[c]),-len(c),c))
def parse_query(text,frequencies):
    quoted=re.findall(r'"([^"]+)"',text); excluded=re.findall(r'(?<!\w)-(\w+)',text); price=re.search(r'\b(?:under|below|price\s*<)\s*[$€£]?\s*(\d+(?:\.\d+)?)',text.lower())
    raw=re.findall(r'(?u)\b[\w-]+\b',re.sub(r'"[^"]+"',' ',text)); corrected=[suggest(t.lower(),frequencies) for t in raw if t not in excluded]
    return {'raw':text,'tokens':corrected,'quoted':quoted,'excluded':excluded,'max_price':float(price.group(1)) if price else None}
freq={'vector':100,'search':180,'sector':20,'server':35,'price':80}; parsed=parse_query('vecotr serch under 200 -used "exact phrase"',freq)

# ---- Use it ----
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import make_pipeline
train=['how to reset password','why is account locked','guide to vector search','what is bm25','buy red shoes','order replacement cable','pricing enterprise plan','purchase laptop','github login','open account settings','go to billing portal','documentation home']; labels=['info']*4+['transaction']*4+['navigate']*4
intent_model=make_pipeline(TfidfVectorizer(ngram_range=(1,2)),LogisticRegression(C=20,random_state=0)).fit(train,labels); intent=intent_model.predict(['buy replacement laptop'])[0]

# ---- Verify it ----
assert levenshtein('serch','search')==1 and levenshtein('vector','vector')==0
assert parsed['tokens'][:2]==['vector','search']
assert parsed['max_price']==200 and parsed['excluded']==['used'] and parsed['quoted']==['exact phrase']
assert suggest('AB-019X',freq)=='AB-019X'
assert suggest('vector',freq)=='vector'
assert intent=='transaction' and intent_model.score(train,labels)==1.0
assert parse_query('plain query',freq)['max_price'] is None
assert parsed['raw'].startswith('vecotr')
