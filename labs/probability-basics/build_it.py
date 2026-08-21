def diagnostic(prevalence,sensitivity,specificity,population=100000):
    if not all(0<=x<=1 for x in (prevalence,sensitivity,specificity)): raise ValueError('probability')
    cases=population*prevalence; noncases=population-cases
    tp=cases*sensitivity; fn=cases-tp; fp=noncases*(1-specificity); tn=noncases-fp
    positive=tp+fp
    return {'tp':tp,'fp':fp,'fn':fn,'tn':tn,'ppv':tp/positive if positive else float('nan')}

def bayes(prior,likelihood,false_positive):
    denominator=likelihood*prior+false_positive*(1-prior)
    return likelihood*prior/denominator
