def snapshot_decision(snapshot,self_id):
    if sum(snapshot.values()) < 2: return None
    return self_id

def apply_writes(state,writes):
    for doctor in writes: state[doctor]=False
    return state
