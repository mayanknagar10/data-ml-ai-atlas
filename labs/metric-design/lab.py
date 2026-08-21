REQUIRED=['name','version','population','unit','numerator','denominator','window','direction','owner']
def validate_contract(contract):
    errors=[k for k in REQUIRED if not contract.get(k)]
    if contract.get('direction') not in ('up','down','target'):errors.append('direction')
    return errors
def ratio_of_sums(rows):
    ids=[r['unit_id'] for r in rows]
    if len(ids)!=len(set(ids)):raise ValueError('duplicate analysis unit')
    numerator=sum(r['numerator'] for r in rows); denominator=sum(r['denominator'] for r in rows)
    if denominator<=0:raise ValueError('nonpositive denominator')
    return numerator/denominator,numerator,denominator
contract={'name':'eligible_ctr','version':'v2','population':'assigned eligible users','unit':'user','numerator':'eligible clicks','denominator':'eligible impressions','window':'7 days','direction':'up','owner':'search'}
rows=[{'unit_id':1,'numerator':1,'denominator':2},{'unit_id':2,'numerator':1,'denominator':8},{'unit_id':3,'numerator':0,'denominator':5}]
metric,total_clicks,total_impressions=ratio_of_sums(rows)

# ---- Use it ----
import pandas as pd
df=pd.DataFrame(rows)
pandas_metric=df['numerator'].sum()/df['denominator'].sum()
mean_user_ratio=(df['numerator']/df['denominator']).mean()

# ---- Verify it ----
assert validate_contract(contract)==[]
assert total_clicks==2 and total_impressions==15
assert abs(metric-pandas_metric)<1e-12
assert abs(metric-mean_user_ratio)>0.05
bad=dict(contract); bad['denominator']=''; assert 'denominator' in validate_contract(bad)
try: ratio_of_sums(rows+[dict(rows[0])])
except ValueError as e: assert 'duplicate' in str(e)
else: raise AssertionError('duplicate grain not rejected')
