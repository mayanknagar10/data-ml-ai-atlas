def transfer(con,transfer_id,source,target,amount):
    with con:
        con.execute('INSERT INTO transfer(id) VALUES (?)',(transfer_id,))
        changed=con.execute('UPDATE account SET balance=balance-? WHERE id=? AND balance>=?',(amount,source,amount)).rowcount
        if changed!=1: raise ValueError('insufficient or missing source')
        if con.execute('UPDATE account SET balance=balance+? WHERE id=?',(amount,target)).rowcount!=1: raise ValueError('missing target')

# ---- Use it ----
import sqlite3
con=sqlite3.connect(':memory:')
con.executescript('CREATE TABLE account(id INTEGER PRIMARY KEY,balance INTEGER CHECK(balance>=0)); CREATE TABLE transfer(id TEXT PRIMARY KEY); CREATE TABLE history(account_id INTEGER,occurred_at INTEGER,amount INTEGER); CREATE INDEX history_account_time ON history(account_id,occurred_at DESC); INSERT INTO account VALUES (1,100),(2,0);')
transfer(con,'t1',1,2,30)
plan=con.execute('EXPLAIN QUERY PLAN SELECT amount FROM history WHERE account_id=? AND occurred_at>=? ORDER BY occurred_at DESC',(1,0)).fetchall()

# ---- Verify it ----
assert con.execute('SELECT SUM(balance) FROM account').fetchone()[0]==100
assert con.execute('SELECT balance FROM account ORDER BY id').fetchall()==[(70,),(30,)]
try: transfer(con,'t2',1,99,10)
except ValueError: pass
else: raise AssertionError('missing target must fail')
assert con.execute('SELECT balance FROM account ORDER BY id').fetchall()==[(70,),(30,)]
assert any('history_account_time' in str(row) for row in plan)
