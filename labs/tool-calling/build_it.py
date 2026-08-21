TOOLS={'weather':{'required':{'city':str}},'add':{'required':{'a':float,'b':float}}}
def validate(call):
    spec=TOOLS.get(call.get('name'))
    if not spec: raise ValueError('unknown tool')
    for k,t in spec['required'].items():
        if k not in call.get('args',{}): raise ValueError('missing '+k)
        if not isinstance(call['args'][k],t): raise TypeError(k)
    return True
