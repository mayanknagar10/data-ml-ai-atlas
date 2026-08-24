import hashlib
workers=4
def partition(key): return int(hashlib.sha256(key.encode()).hexdigest(),16)%workers
keys=["user-1","user-2","user-3","user-4"]
assignments={k:partition(k) for k in keys}
def quorum(n): return n//2+1
