def merge_sort(items, key=lambda x: x):
    if len(items) <= 1: return list(items)
    middle = len(items)//2
    left = merge_sort(items[:middle], key); right = merge_sort(items[middle:], key)
    out=[]; i=j=0
    while i < len(left) and j < len(right):
        if key(left[i]) <= key(right[j]): out.append(left[i]); i += 1
        else: out.append(right[j]); j += 1
    return out + left[i:] + right[j:]

def lower_bound(a, x):
    lo, hi = 0, len(a)
    while lo < hi:
        mid = (lo+hi)//2
        if a[mid] < x: lo = mid+1
        else: hi = mid
    return lo

# ---- Use it ----
from bisect import bisect_left
from heapq import nlargest
records = [('b', 2), ('a', 1), ('c', 2)]
ordered = sorted(records, key=lambda row: row[1])
first_two = bisect_left([1,2,2,4], 2)
top = nlargest(2, records, key=lambda row: row[1])

# ---- Verify it ----
items=[('first',2),('second',1),('third',2)]
out=merge_sort(items,key=lambda x:x[1])
assert [x[1] for x in out] == [1,2,2]
assert [x[0] for x in out if x[1]==2] == ['first','third']
for a in [[],[1],[1,2,2,4]]:
    for x in [0,1,2,3,5]:
        i=lower_bound(a,x)
        assert i == bisect_left(a,x)
        assert all(v < x for v in a[:i])
        assert all(v >= x for v in a[i:])
assert first_two == 1 and len(top) == 2
