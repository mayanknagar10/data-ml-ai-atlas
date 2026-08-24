from collections import deque
seq=["a","b","a"]
unique=set(seq)
index={value:i for i,value in enumerate(seq)}
queue=deque(seq)
left=queue.popleft(); queue.append("c")
