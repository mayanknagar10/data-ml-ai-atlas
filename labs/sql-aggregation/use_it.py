def grouped_sum(rows,key,value):
    out={}
    for row in rows:
        group=row[key]
        if row[value] is not None: out[group]=out.get(group,0)+row[value]
    return out

# ---- Use it ----
import sqlite3
con=sqlite3.connect(':memory:')
con.executescript('CREATE TABLE orders(product TEXT, customer TEXT, amount REAL, status TEXT); INSERT INTO orders VALUES ("a","u1",10,"ok"),("a","u2",NULL,"failed"),("b","u1",5,"ok");')
rows=con.execute('SELECT product, COUNT(*) n, COUNT(amount) observed, SUM(CASE WHEN status="ok" THEN amount ELSE 0 END) revenue, 1.0*SUM(status="failed")/NULLIF(COUNT(*),0) fail_rate FROM orders GROUP BY product ORDER BY product').fetchall()
