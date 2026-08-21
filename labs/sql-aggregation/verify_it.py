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

# ---- Verify it ----
assert rows == [('a',2,1,10.0,0.5),('b',1,1,5.0,0.0)]
assert len({row[0] for row in rows}) == len(rows)
assert sum(row[3] for row in rows) == 15.0
assert grouped_sum([{'g':'a','x':1},{'g':'a','x':None},{'g':'b','x':2}],'g','x') == {'a':1,'b':2}
