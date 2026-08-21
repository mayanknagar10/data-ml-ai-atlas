data={
 'A':{'mild':(90,100),'severe':(240,900)},
 'B':{'mild':(760,900),'severe':(20,100)},
}
def rate(pair): return pair[0]/pair[1]
def aggregate(group):
    successes=sum(x[0] for x in group.values()); total=sum(x[1] for x in group.values())
    return successes/total
def standardized(group,weights): return sum(weights[z]*rate(group[z]) for z in weights)
aggregate_rates={g:aggregate(table) for g,table in data.items()}
within={z:{g:rate(data[g][z]) for g in data} for z in ('mild','severe')}
target={'mild':0.5,'severe':0.5}
standardized_rates={g:standardized(table,target) for g,table in data.items()}

# ---- Use it ----
import pandas as pd
rows=[{'group':g,'severity':z,'success':s,'total':n,'rate':s/n} for g,t in data.items() for z,(s,n) in t.items()]
df=pd.DataFrame(rows)
pandas_aggregate=df.groupby('group')[['success','total']].sum().eval('success/total')

# ---- Verify it ----
assert within['mild']['A']>within['mild']['B']
assert within['severe']['A']>within['severe']['B']
assert aggregate_rates['A']<aggregate_rates['B']
assert standardized_rates['A']>standardized_rates['B']
assert abs(sum(target.values())-1)<1e-12
assert all(abs(aggregate_rates[g]-pandas_aggregate[g])<1e-12 for g in data)
