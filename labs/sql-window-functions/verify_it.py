def row_number(rows,partition_key,order_key):
    groups={}
    for row in rows: groups.setdefault(row[partition_key],[]).append(row)
    out=[]
    for group in groups.values():
        for number,row in enumerate(sorted(group,key=order_key),1): out.append({**row,'row_number':number})
    return out

# ---- Use it ----
import sqlite3
con=sqlite3.connect(':memory:')
con.executescript('CREATE TABLE events(entity TEXT, ts INTEGER, seq INTEGER, value INTEGER); INSERT INTO events VALUES ("a",10,1,5),("a",10,2,7),("a",20,1,3),("b",5,1,4);')
rows=con.execute('SELECT entity,ts,seq,value, ROW_NUMBER() OVER(PARTITION BY entity ORDER BY ts DESC,seq DESC) rn, SUM(value) OVER(PARTITION BY entity ORDER BY ts,seq ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) running FROM events ORDER BY entity,ts,seq').fetchall()

# ---- Verify it ----
assert len(rows)==4
latest=[row for row in rows if row[4]==1]
assert {(r[0],r[1],r[2]) for r in latest} == {('a',20,1),('b',5,1)}
a=[r for r in rows if r[0]=='a']
assert [r[5] for r in a] == [5,12,15]
assert len({(r[0],r[4]) for r in rows})==len(rows)
