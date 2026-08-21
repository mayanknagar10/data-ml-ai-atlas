import hashlib,random
def score(namespace,unit):
    digest=hashlib.sha256(f'{namespace}:{unit}'.encode()).digest()
    return int.from_bytes(digest[:8],'big')
def blocked_assign(rows,namespace):
    by_block={}
    for row in rows:by_block.setdefault(row['block'],[]).append(row)
    assignment={}
    for block,members in by_block.items():
        ordered=sorted(members,key=lambda r:score(namespace,r['id']))
        for i,row in enumerate(ordered):assignment[row['id']]=i%2
    return assignment
rows=[{'id':i,'block':f'baseline-{i%3}','baseline':10+(i%3)*4} for i in range(120)]
assignment=blocked_assign(rows,'exp-v1')

# ---- Use it ----
import pandas as pd
df=pd.DataFrame(rows); df['treatment']=df['id'].map(assignment)
block_counts=df.groupby(['block','treatment']).size().unstack(fill_value=0)
balance=df.groupby('treatment')['baseline'].mean()
