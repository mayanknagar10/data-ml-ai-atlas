def chi_square_independence(table):
    rows=len(table); cols=len(table[0])
    row_totals=[sum(row) for row in table]
    col_totals=[sum(table[i][j] for i in range(rows)) for j in range(cols)]
    total=sum(row_totals)
    expected=[[row_totals[i]*col_totals[j]/total for j in range(cols)] for i in range(rows)]
    contributions=[[(table[i][j]-expected[i][j])**2/expected[i][j] for j in range(cols)] for i in range(rows)]
    statistic=sum(sum(row) for row in contributions)
    return statistic,expected,contributions,(rows-1)*(cols-1)
table=[[90,10],[160,40],[150,50]]
statistic,expected,contrib,df=chi_square_independence(table)

# ---- Use it ----
import numpy as np
from scipy.stats import chi2_contingency
result=chi2_contingency(np.asarray(table),correction=False)

# ---- Verify it ----
assert abs(statistic-result.statistic) < 1e-12
assert df == result.dof == 2
assert np.allclose(expected,result.expected_freq)
assert all(abs(sum(expected[i])-sum(table[i])) < 1e-12 for i in range(len(table)))
assert abs(sum(sum(row) for row in contrib)-statistic) < 1e-12
