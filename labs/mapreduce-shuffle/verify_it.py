import hashlib
workers=4
def partition(key): return int(hashlib.sha256(key.encode()).hexdigest(),16)%workers
keys=["user-1","user-2","user-3","user-4"]
assignments={k:partition(k) for k in keys}
def quorum(n): return n//2+1

# ---- Use it ----
replicas=3; required=quorum(replicas); acknowledgements=2
write_commits=acknowledgements>=required

# ---- Verify it ----
assert all(0<=p<workers for p in assignments.values())
assert quorum(3)==2 and quorum(5)==3
assert write_commits
assert partition("user-1")==partition("user-1")
