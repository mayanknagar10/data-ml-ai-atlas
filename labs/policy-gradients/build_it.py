import math, random
logits=[0.0,0.0]; lr=.05
def probs():
    e=[math.exp(x) for x in logits]; z=sum(e); return [x/z for x in e]
for _ in range(2000):
    p=probs(); a=0 if random.random()<p[0] else 1
    reward=(1.0 if random.random() < (0.75 if a==0 else 0.25) else 0.0)
    # grad log softmax: 1[a=j] - p_j
    for j in (0,1): logits[j]+=lr*reward*((1 if a==j else 0)-p[j])
print(probs())
