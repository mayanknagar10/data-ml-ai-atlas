from itertools import combinations
transactions=[{'bread','milk','eggs'},{'bread','milk'},{'bread','eggs'},{'milk','eggs'},{'bread','milk','eggs'},{'bread','butter'},{'milk','butter'},{'bread','milk','butter'}]
def support(itemset, rows=transactions):
    target=frozenset(itemset)
    return sum(target <= row for row in rows)/len(rows)
def apriori(rows, min_support):
    singletons={frozenset([item]) for row in rows for item in row}
    level={s for s in singletons if support(s,rows)>=min_support}
    found={s:support(s,rows) for s in level}; k=2
    while level:
        candidates={a|b for a in level for b in level if len(a|b)==k}
        candidates={c for c in candidates if all(frozenset(s) in level for s in combinations(c,k-1))}
        level={c for c in candidates if support(c,rows)>=min_support}
        found.update({c:support(c,rows) for c in level}); k+=1
    return found
frequent=apriori(transactions,.25)
