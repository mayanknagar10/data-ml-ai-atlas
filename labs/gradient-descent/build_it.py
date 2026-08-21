def optimize(lr,steps=30):
    x=8.0; hist=[]
    for _ in range(steps):
        grad=2*(x-3)          # d/dx (x-3)^2
        x-=lr*grad; hist.append(x)
    return x,hist
for lr in [0.05,0.4,1.1]:
    print(lr,optimize(lr)[0])
