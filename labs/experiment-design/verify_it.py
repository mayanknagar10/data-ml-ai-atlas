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
rows=[{'id':i,'block':'high' if i%3==0 else 'low','baseline':10+(i%3)*4} for i in range(120)]
assignment=blocked_assign(rows,'exp-v1')

# ---- Use it ----
import pandas as pd
df=pd.DataFrame(rows); df['treatment']=df['id'].map(assignment)
block_counts=df.groupby(['block','treatment']).size().unstack(fill_value=0)
balance=df.groupby('treatment')['baseline'].mean()

# ---- Verify it ----
assert assignment==blocked_assign(rows,'exp-v1')
assert assignment!=blocked_assign(rows,'exp-v2')
assert (block_counts.max(axis=1)-block_counts.min(axis=1)).max()<=1
assert abs(balance[1]-balance[0])<0.5
rng=random.Random(7); estimates=[]
for rep in range(500):
    a=blocked_assign(rows,f'rep-{rep}')
    outcomes={r['id']:r['baseline']+2*a[r['id']]+rng.gauss(0,1) for r in rows}
    mt=sum(outcomes[i] for i,z in a.items() if z)/sum(a.values())
    mc=sum(outcomes[i] for i,z in a.items() if not z)/(len(a)-sum(a.values()))
    estimates.append(mt-mc)
assert abs(sum(estimates)/len(estimates)-2)<0.08
