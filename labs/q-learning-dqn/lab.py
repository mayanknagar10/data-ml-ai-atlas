import random
Q={(0,0):0.0,(0,1):0.0,(1,0):0.0,(1,1):0.0}
alpha,gamma,eps=.2,.9,.2
def step(s,a):
    # action 1 from state 0 reaches terminal reward; otherwise stay/zero
    if s==0 and a==1: return 1,1.0,True
    return 0,0.0,False
for episode in range(200):
    s=0
    for _ in range(5):
        a=random.choice([0,1]) if random.random()<eps else max([0,1], key=lambda x:Q[(s,x)])
        ns,r,done=step(s,a)
        target=r if done else r+gamma*max(Q[(ns,0)],Q[(ns,1)])
        Q[(s,a)]+=alpha*(target-Q[(s,a)])
        s=ns
        if done: break
print(Q)

# ---- Use it ----
# In a real project, Gymnasium + Stable-Baselines3/CleanRL can manage environments,
# replay and neural policies. Keep the same state/action/reward contract.
best_action=max([0,1], key=lambda a:Q[(0,a)])
print('greedy action:',best_action)

# ---- Verify it ----
assert Q[(0,1)] > Q[(0,0)]
assert max([0,1], key=lambda a:Q[(0,a)]) == 1
