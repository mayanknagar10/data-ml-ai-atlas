def mean(xs): return sum(xs)/len(xs)
def one_way_anova(groups):
    all_values=[x for g in groups for x in g]; grand=mean(all_values)
    ss_between=sum(len(g)*(mean(g)-grand)**2 for g in groups)
    ss_within=sum(sum((x-mean(g))**2 for x in g) for g in groups)
    ss_total=sum((x-grand)**2 for x in all_values)
    df_b=len(groups)-1; df_w=len(all_values)-len(groups)
    f=(ss_between/df_b)/(ss_within/df_w)
    return f,ss_between,ss_within,ss_total
groups=[[8,9,10,11],[9,10,11,12],[15,16,17,18]]
f,sb,sw,st=one_way_anova(groups)
