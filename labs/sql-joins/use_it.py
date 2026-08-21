def inner_join(left,right,key):
    out=[]
    for lrow in left:
        for rrow in right:
            if lrow.get(key) is not None and lrow.get(key)==rrow.get(key):
                out.append({**lrow,**rrow})
    return out

def left_join(left,right,key):
    out=[]
    right_fields=set().union(*(r.keys() for r in right)) if right else set()
    for lrow in left:
        matches=[r for r in right if lrow.get(key) is not None and lrow.get(key)==r.get(key)]
        if matches:
            out.extend({**lrow,**r} for r in matches)
        else:
            out.append({**{f:None for f in right_fields if f not in lrow},**lrow})
    return out

# ---- Use it ----
import sqlite3
con=sqlite3.connect(':memory:')
con.executescript('CREATE TABLE customer(id INTEGER PRIMARY KEY); CREATE TABLE orders(id INTEGER, customer_id INTEGER, amount REAL); INSERT INTO customer VALUES (1),(2),(3); INSERT INTO orders VALUES (10,1,5),(11,1,7),(12,2,3);')
rows=con.execute('SELECT c.id, COUNT(o.id), COALESCE(SUM(o.amount),0) FROM customer c LEFT JOIN orders o ON o.customer_id=c.id GROUP BY c.id ORDER BY c.id').fetchall()
