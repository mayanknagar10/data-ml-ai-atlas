import pandas as pd
events=pd.DataFrame({'user':[1,1,1,2,2,3,3],'event':['visit','signup','purchase','visit','signup','visit','signup']})
steps=['visit','signup','purchase']
users={s:set(events.loc[events.event==s,'user']) for s in steps}
counts=[len(users[steps[0]])]
base=users[steps[0]]
for s in steps[1:]:
    base=base & users[s]
    counts.append(len(base))
print(dict(zip(steps,counts)))

# ---- Use it ----
summary=pd.Series(dict(zip(steps,counts)),name='users')
print(summary)

# ---- Verify it ----
assert counts == sorted(counts, reverse=True)
