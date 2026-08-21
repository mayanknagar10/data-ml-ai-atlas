def transfer(con,transfer_id,source,target,amount):
    with con:
        con.execute('INSERT INTO transfer(id) VALUES (?)',(transfer_id,))
        changed=con.execute('UPDATE account SET balance=balance-? WHERE id=? AND balance>=?',(amount,source,amount)).rowcount
        if changed!=1: raise ValueError('insufficient or missing source')
        if con.execute('UPDATE account SET balance=balance+? WHERE id=?',(amount,target)).rowcount!=1: raise ValueError('missing target')
