def plan_text(con,sql,params=()):
    return ' '.join(str(row) for row in con.execute('EXPLAIN QUERY PLAN '+sql,params))

# ---- Use it ----
import sqlite3
con=sqlite3.connect(':memory:')
con.execute('CREATE TABLE event(tenant INTEGER,ts INTEGER,value TEXT)')
con.executemany('INSERT INTO event VALUES (?,?,?)',((i%10,i,str(i)) for i in range(1000)))
con.execute('CREATE INDEX event_tenant_ts ON event(tenant,ts)')
selective='SELECT value FROM event WHERE tenant=? AND ts>=?'
indexed_plan=plan_text(con,selective,(3,900))
rows=con.execute(selective,(3,900)).fetchall()

# ---- Verify it ----
assert all(int(value[0])>=903 for value in rows)
assert 'event_tenant_ts' in indexed_plan
scan_plan=plan_text(con,'SELECT COUNT(*) FROM event WHERE value LIKE ?',('%9%',))
assert 'SCAN' in scan_plan.upper()
expected=con.execute('SELECT value FROM event').fetchall()
actual=con.execute('SELECT value FROM event WHERE tenant>=0').fetchall()
assert sorted(expected)==sorted(actual)
