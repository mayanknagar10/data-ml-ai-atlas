def validate_joint(table):
    if any(value<0 for row in table for value in row): raise ValueError('negative mass')
    total=sum(map(sum,table))
    if abs(total-1)>1e-12: raise ValueError('not normalized')

def marginals(table):
    validate_joint(table)
    rows=[sum(row) for row in table]
    cols=[sum(table[i][j] for i in range(len(table))) for j in range(len(table[0]))]
    return rows,cols

def conditional_x_given_y(table,j):
    _,cols=marginals(table); denominator=cols[j]
    if denominator==0: raise ValueError('impossible evidence')
    return [table[i][j]/denominator for i in range(len(table))]

# ---- Use it ----
joint=[[.24,.16],[.18,.42]]
weather,demand=marginals(joint)
# rows: rain,dry; columns: high,low
p_weather_given_high=conditional_x_given_y(joint,0)
p_high_given_weather=[joint[i][0]/weather[i] for i in range(2)]
