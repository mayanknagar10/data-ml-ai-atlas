interpretations={'batch':{'needs':{'data-volume','deadline'}},'online':{'needs':{'qps','latency','consistency'}},'stream':{'needs':{'event-rate','lateness','state'}}}
questions={'execution-mode':{'batch','online','stream'},'latency-target':{'online','stream'},'daily-volume':{'batch','stream'}}
def separation(answered):
    remaining=set(interpretations)
    for q,allowed in answered.items(): remaining&=questions[q] if allowed else remaining-questions[q]
    return remaining
claims=[{'text':'use a queue','kind':'hypothesis','assumptions':{'online'},'checks':{'load-test'}},{'text':'timeout is 30s','kind':'external-fact','assumptions':set(),'checks':set()}]
def unsupported(items): return [c['text'] for c in items if c['kind']!='known' and not c['checks']]
