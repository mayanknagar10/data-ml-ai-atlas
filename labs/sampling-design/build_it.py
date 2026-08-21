def weighted_mean(values,weights):
    if len(values)!=len(weights) or any(w<=0 for w in weights): raise ValueError('valid weights required')
    return sum(v*w for v,w in zip(values,weights))/sum(weights)

eng=[72.0]*90; support=[60.0]*50
values=eng+support
weights=[10.0]*len(eng)+[2.0]*len(support)
design_mean=weighted_mean(values,weights)
unweighted=sum(values)/len(values)
truth=(900*72+100*60)/1000
