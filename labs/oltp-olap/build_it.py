def row_scan(rows, region):
    touched=0; total=0.0
    for row in rows:
        touched += len(row)
        if row['region']==region:
            total += row['amount']
    return total,touched

def column_scan(columns, region):
    touched=0; total=0.0
    for value,amount in zip(columns['region'],columns['amount']):
        touched += 2
        if value==region:
            total += amount
    return total,touched
