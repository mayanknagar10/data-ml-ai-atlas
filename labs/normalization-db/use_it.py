def closure(attributes,dependencies):
    result=set(attributes)
    changed=True
    while changed:
        changed=False
        for left,right in dependencies:
            if set(left)<=result and not set(right)<=result:
                result.update(right); changed=True
    return result

# ---- Use it ----
import sqlite3
con=sqlite3.connect(':memory:'); con.execute('PRAGMA foreign_keys=ON')
con.executescript('CREATE TABLE customer(id INTEGER PRIMARY KEY,name TEXT); CREATE TABLE product(id INTEGER PRIMARY KEY,name TEXT,current_price REAL); CREATE TABLE orders(id INTEGER PRIMARY KEY,customer_id INTEGER REFERENCES customer(id),ordered_at TEXT); CREATE TABLE order_line(order_id INTEGER REFERENCES orders(id),line_no INTEGER,product_id INTEGER REFERENCES product(id),quantity INTEGER CHECK(quantity>0),charged_price REAL CHECK(charged_price>=0),PRIMARY KEY(order_id,line_no)); INSERT INTO customer VALUES(1,"A"); INSERT INTO product VALUES(2,"P",10); INSERT INTO orders VALUES(3,1,"2026-01-01"); INSERT INTO order_line VALUES(3,1,2,2,8); UPDATE product SET current_price=12 WHERE id=2;')
