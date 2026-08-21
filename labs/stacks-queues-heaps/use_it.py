class MinHeap:
    def __init__(self): self.data = []
    def push(self, value):
        a = self.data; a.append(value); i = len(a)-1
        while i:
            p = (i-1)//2
            if a[p] <= a[i]: break
            a[p], a[i] = a[i], a[p]; i = p
    def pop(self):
        if not self.data: raise IndexError('empty heap')
        a = self.data; root = a[0]; last = a.pop()
        if a:
            a[0] = last; i = 0
            while True:
                left = 2*i+1
                if left >= len(a): break
                right = left+1
                child = right if right < len(a) and a[right] < a[left] else left
                if a[i] <= a[child]: break
                a[i], a[child] = a[child], a[i]; i = child
        return root

# ---- Use it ----
import heapq
values = [7, 1, 9, 3, 8, 2]
k = 3
top = []
for value in values:
    if len(top) < k: heapq.heappush(top, value)
    elif value > top[0]: heapq.heapreplace(top, value)
result = sorted(top, reverse=True)
