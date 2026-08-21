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

# ---- Verify it ----
snapshot={'a':True,'b':True}
writes=[snapshot_decision(snapshot,'a'),snapshot_decision(snapshot,'b')]
unsafe=apply_writes(dict(snapshot),[w for w in writes if w])
assert sum(unsafe.values())==0
assert sum(state.values())==1
assert sorted(results)==[False,True]
assert all(value in (True,False) for value in state.values())
