def load_day(con,day,run_id):
    with con:
        prior=con.execute('SELECT status FROM run WHERE run_id=?',(run_id,)).fetchone()
        if prior: return prior[0]
        con.execute('INSERT INTO run(run_id,day,status) VALUES (?,?,"running")',(run_id,day))
        con.execute('DELETE FROM daily WHERE day=?',(day,))
        con.execute('INSERT INTO daily(day,customer,total) SELECT day,customer,SUM(amount) FROM event WHERE day=? GROUP BY day,customer',(day,))
        con.execute('UPDATE run SET status="success" WHERE run_id=?',(run_id,))
        return 'success'
