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
