def snapshot_decision(snapshot,self_id):
    if sum(snapshot.values()) < 2: return None
    return self_id

def apply_writes(state,writes):
    for doctor in writes: state[doctor]=False
    return state

# ---- Use it ----
from threading import Lock,Thread
state={'a':True,'b':True}; guard=Lock()
def safe_off(doctor):
    with guard:
        if sum(state.values()) < 2: return False
        state[doctor]=False; return True
results=[]
threads=[Thread(target=lambda d=d: results.append(safe_off(d))) for d in state]
for t in threads:t.start()
for t in threads:t.join()
