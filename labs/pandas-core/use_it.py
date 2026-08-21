def key_counts(rows, key):
    counts = {}
    for row in rows:
        value = row[key]
        counts[value] = counts.get(value, 0) + 1
    return counts

def require_unique(rows, key):
    duplicates = [k for k, n in key_counts(rows, key).items() if n > 1]
    if duplicates:
        raise ValueError(f'duplicate {key}: {duplicates[:3]}')

# ---- Use it ----
import pandas as pd
customers = pd.DataFrame({'customer_id': [1, 2, 3]})
orders = pd.DataFrame({'order_id': [10, 11, 12], 'customer_id': [1, 1, 2], 'amount': [5., 7., 3.]})
agg = orders.groupby('customer_id', as_index=False).agg(total_spend=('amount', 'sum'), n_orders=('order_id', 'nunique'))
features = customers.merge(agg, on='customer_id', how='left', validate='one_to_one', indicator=True)
features[['total_spend', 'n_orders']] = features[['total_spend', 'n_orders']].fillna(0)
