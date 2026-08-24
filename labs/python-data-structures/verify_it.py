from collections import deque
seq=["a","b","a"]
unique=set(seq)
index={value:i for i,value in enumerate(seq)}
queue=deque(seq)
left=queue.popleft(); queue.append("c")

# ---- Use it ----
counts={}
for value in seq: counts[value]=counts.get(value,0)+1
ordered_unique=list(dict.fromkeys(seq))

# ---- Verify it ----
assert seq==["a","b","a"]
assert unique=={"a","b"}
assert index=={"a":2,"b":1}
assert left=="a" and list(queue)==["b","a","c"]
assert counts=={"a":2,"b":1}
assert ordered_unique==["a","b"]
try:
    hash([])
    raise AssertionError("list should be unhashable")
except TypeError:
    pass
