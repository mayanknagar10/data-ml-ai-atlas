requests=[20,35,55,80,40,25]
capacity_per_replica=30
def replicas_needed(load): return max(1,(load+capacity_per_replica-1)//capacity_per_replica)
replicas=[replicas_needed(x) for x in requests]
util=[load/(r*capacity_per_replica) for load,r in zip(requests,replicas)]

# ---- Use it ----
peak=max(replicas); healthy=all(u<=1 for u in util)
rollout={"old":2,"new":1,"max_unavailable":0}
