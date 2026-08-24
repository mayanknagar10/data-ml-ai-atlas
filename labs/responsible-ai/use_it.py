records=[{"has_pii":False,"allowed":True},{"has_pii":True,"allowed":False},{"has_pii":False,"allowed":True}]
def policy(record): return (not record["has_pii"]) and record["allowed"]
decisions=[policy(r) for r in records]
audit=[{"id":i,"decision":d} for i,d in enumerate(decisions)]

# ---- Use it ----
blocked=sum(not d for d in decisions); allowed=sum(decisions)
coverage=len(audit)==len(records)
