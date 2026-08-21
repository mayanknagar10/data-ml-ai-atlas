def load_day(con,day,run_id):
    with con:
        prior=con.execute('SELECT status FROM run WHERE run_id=?',(run_id,)).fetchone()
        if prior: return prior[0]
        con.execute('INSERT INTO run(run_id,day,status) VALUES (?,?,"running")',(run_id,day))
        con.execute('DELETE FROM daily WHERE day=?',(day,))
        con.execute('INSERT INTO daily(day,customer,total) SELECT day,customer,SUM(amount) FROM event WHERE day=? GROUP BY day,customer',(day,))
        con.execute('UPDATE run SET status="success" WHERE run_id=?',(run_id,))
        return 'success'

# ---- Use it ----
import sqlite3
con=sqlite3.connect(':memory:')
con.executescript('CREATE TABLE event(day TEXT,customer TEXT,amount REAL); CREATE TABLE daily(day TEXT,customer TEXT,total REAL,PRIMARY KEY(day,customer)); CREATE TABLE run(run_id TEXT PRIMARY KEY,day TEXT,status TEXT); INSERT INTO event VALUES ("2026-01-01","a",2),("2026-01-01","a",3),("2026-01-01","b",4);')
first=load_day(con,'2026-01-01','run-1'); second=load_day(con,'2026-01-01','run-1')

# ---- Verify it ----
assert first==second=='success'
assert con.execute('SELECT customer,total FROM daily ORDER BY customer').fetchall()==[('a',5.0),('b',4.0)]
assert con.execute('SELECT COUNT(*) FROM run WHERE run_id="run-1"').fetchone()[0]==1
assert con.execute('SELECT SUM(total) FROM daily').fetchone()[0]==con.execute('SELECT SUM(amount) FROM event').fetchone()[0]
