import math
def sigmoid(x): return 1/(1+math.exp(-x))
real_logit=2.0; fake_logit=-1.0
D_real,D_fake=sigmoid(real_logit),sigmoid(fake_logit)
d_loss=-(math.log(D_real)+math.log(1-D_fake))
g_loss=-math.log(D_fake)
print(D_real,D_fake,d_loss,g_loss)
