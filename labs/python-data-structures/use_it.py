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
