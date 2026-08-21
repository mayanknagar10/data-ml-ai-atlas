y=[1,1,1,0,0,0]; pred=[1,0,1,1,0,0]
tp=sum(a==1 and b==1 for a,b in zip(y,pred)); fn=sum(a==1 and b==0 for a,b in zip(y,pred))
fp=sum(a==0 and b==1 for a,b in zip(y,pred))
precision=tp/(tp+fp); recall=tp/(tp+fn); f1=2*precision*recall/(precision+recall)
print(tp,fp,fn,precision,recall,f1)

# ---- Use it ----
from sklearn.metrics import classification_report
print(classification_report(y,pred,digits=3))

# ---- Verify it ----
assert round(precision,3)==.667 and round(recall,3)==.667
