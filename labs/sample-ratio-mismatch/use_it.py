from math import exp
def srm_stat(observed,proportions):
    total=sum(observed); expected=[total*p for p in proportions]
    stat=sum((o-e)**2/e for o,e in zip(observed,expected))
    return stat,expected
# For two arms, chi-square survival is erfc(sqrt(x/2)).
from math import erfc,sqrt
def srm_two_arm(observed,proportions=(0.5,0.5)):
    stat,expected=srm_stat(observed,proportions)
    return stat,erfc(sqrt(stat/2)),expected
global_report=srm_two_arm([10000,9300])
slices={'before':[5000,5002],'after':[5000,4298]}
slice_reports={k:srm_two_arm(v) for k,v in slices.items()}

# ---- Use it ----
from scipy.stats import chisquare
scipy_result=chisquare([10000,9300],f_exp=global_report[2])
