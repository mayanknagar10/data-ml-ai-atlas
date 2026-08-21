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

# ---- Use it ----
import sqlite3
rows=[{'order_id':1,'region':'EU','amount':10.0,'note':'a'},{'order_id':2,'region':'US','amount':7.0,'note':'b'},{'order_id':3,'region':'EU','amount':4.0,'note':'c'}]
columns={key:[row[key] for row in rows] for key in rows[0]}
con=sqlite3.connect(':memory:')
con.execute('CREATE TABLE orders(order_id INTEGER,region TEXT,amount REAL,note TEXT)')
con.executemany('INSERT INTO orders VALUES(:order_id,:region,:amount,:note)',rows)
sql_total=con.execute("SELECT SUM(amount) FROM orders WHERE region='EU'").fetchone()[0]
