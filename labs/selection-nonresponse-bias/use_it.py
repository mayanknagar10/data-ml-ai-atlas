def weighted_mean(values,weights): return sum(v*w for v,w in zip(values,weights))/sum(weights)
# Deterministic expected-count population: 700 standard, 300 premium.
pop_values=[0.60]*700+[0.90]*300
groups=['standard']*700+['premium']*300
# 20% and 80% response, selected deterministically within identical cells.
respondent_values=[0.60]*140+[0.90]*240
respondent_groups=['standard']*140+['premium']*240
unweighted=sum(respondent_values)/len(respondent_values)
weights=[700/140 if g=='standard' else 300/240 for g in respondent_groups]
adjusted=weighted_mean(respondent_values,weights)
truth=sum(pop_values)/len(pop_values)

# ---- Use it ----
import numpy as np
np_adjusted=float(np.average(np.asarray(respondent_values),weights=np.asarray(weights)))
response_rate=len(respondent_values)/len(pop_values)
