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
