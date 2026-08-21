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
