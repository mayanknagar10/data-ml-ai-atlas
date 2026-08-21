def independent(table,tol=1e-12):
    total=sum(map(sum,table)); rows=[sum(r)/total for r in table]; cols=[sum(table[i][j] for i in range(len(table)))/total for j in range(len(table[0]))]
    return all(abs(table[i][j]/total-rows[i]*cols[j])<tol for i in range(len(rows)) for j in range(len(cols)))

def mixture(tables,weights):
    return [[sum(weights[k]*tables[k][i][j] for k in range(len(tables))) for j in range(len(tables[0][0]))] for i in range(len(tables[0]))]
