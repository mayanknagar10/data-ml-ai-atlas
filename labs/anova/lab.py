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

# ---- Use it ----
from scipy.stats import f_oneway
scipy_result=f_oneway(*groups)

# ---- Verify it ----
assert abs(st-(sb+sw)) < 1e-12
assert abs(f-scipy_result.statistic) < 1e-12
shifted=[[x+100 for x in g] for g in groups]
assert abs(one_way_anova(shifted)[0]-f) < 1e-12
assert f > 1
