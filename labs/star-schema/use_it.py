def validate_star(facts, dimensions):
    grain=[(row['order_id'],row['line_id']) for row in facts]
    if len(grain)!=len(set(grain)): raise ValueError('duplicate fact grain')
    product_keys=set(dimensions['product'])
    if any(row['product_key'] not in product_keys for row in facts): raise ValueError('missing product')
    return {
        'gross':sum(row['gross'] for row in facts),
        'net':sum(row['gross']-row['discount']-row['refund'] for row in facts),
        'orders':len({row['order_id'] for row in facts})
    }

# ---- Use it ----
import sqlite3
con=sqlite3.connect(':memory:')
con.executescript('CREATE TABLE dim_product(product_key INTEGER PRIMARY KEY, category TEXT); CREATE TABLE fact_line(order_id INTEGER,line_id INTEGER,product_key INTEGER,gross REAL,discount REAL,refund REAL,PRIMARY KEY(order_id,line_id),FOREIGN KEY(product_key) REFERENCES dim_product(product_key)); INSERT INTO dim_product VALUES(1,"book"),(2,"game"); INSERT INTO fact_line VALUES(10,1,1,20,2,0),(10,2,2,15,0,5),(11,1,1,8,0,0);')
rows=con.execute('SELECT order_id,line_id,product_key,gross,discount,refund FROM fact_line').fetchall()
facts=[dict(zip(['order_id','line_id','product_key','gross','discount','refund'],row)) for row in rows]
metrics=validate_star(facts,{'product':{1,2}})
