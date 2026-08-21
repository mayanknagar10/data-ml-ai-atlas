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
