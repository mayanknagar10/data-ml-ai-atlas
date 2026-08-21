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
