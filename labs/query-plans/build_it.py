def plan_text(con,sql,params=()):
    return ' '.join(str(row) for row in con.execute('EXPLAIN QUERY PLAN '+sql,params))
