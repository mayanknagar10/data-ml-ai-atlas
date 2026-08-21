def validate_chart(spec,fields):
    errors=[]; mark=spec['mark']; x=fields[spec['x']]['type']; y=fields[spec['y']]['type']
    if mark=='line' and x not in {'temporal','ordinal','quantitative'}: errors.append('line requires ordered x')
    if mark=='bar' and y!='quantitative': errors.append('bar magnitude must be quantitative')
    if mark=='bar' and spec.get('baseline',0)!=0: errors.append('bar baseline must be zero')
    if spec.get('color_only_critical'): errors.append('critical distinction needs redundant encoding')
    return errors
fields={'region':{'type':'nominal'},'revenue':{'type':'quantitative'},'month':{'type':'temporal'}}
good={'mark':'bar','x':'region','y':'revenue','baseline':0}
bad={'mark':'line','x':'region','y':'revenue'}

# ---- Use it ----
import matplotlib.pyplot as plt
labels=['North','South','West']; values=[12,9,15]
fig,ax=plt.subplots(); bars=ax.bar(labels,values); ax.set_ylim(bottom=0); ax.set_ylabel('Revenue (millions)'); ax.set_title('Revenue by region')

# ---- Verify it ----
assert validate_chart(good,fields)==[]
assert 'line requires ordered x' in validate_chart(bad,fields)
truncated={'mark':'bar','x':'region','y':'revenue','baseline':8}
assert 'bar baseline must be zero' in validate_chart(truncated,fields)
assert ax.get_ylim()[0]==0
assert len(bars)==len(values)
