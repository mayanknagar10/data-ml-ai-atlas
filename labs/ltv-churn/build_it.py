def kaplan_meier(durations,events):
    times=sorted(set(durations)); survival=1.0; curve=[]
    for t in times:
        at_risk=sum(d>=t for d in durations); failures=sum(d==t and e for d,e in zip(durations,events))
        if failures:survival*=1-failures/at_risk
        curve.append((t,survival,at_risk,failures))
    return curve
def discounted_ltv(curve,margin,discount,horizon):
    by_time=dict((t,s) for t,s,_,_ in curve); last=1.0; value=0.0
    for t in range(1,horizon+1):
        if t in by_time:last=by_time[t]
        value+=last*margin/(1+discount)**t
    return value
durations=[1,2,2,3,4,4]; events=[1,1,0,1,0,1]
curve=kaplan_meier(durations,events); ltv=discounted_ltv(curve,12,0.01,4)
