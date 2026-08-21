y=[1,1,1,0,0,0]; pred=[1,0,1,1,0,0]
tp=sum(a==1 and b==1 for a,b in zip(y,pred)); fn=sum(a==1 and b==0 for a,b in zip(y,pred))
fp=sum(a==0 and b==1 for a,b in zip(y,pred))
precision=tp/(tp+fp); recall=tp/(tp+fn); f1=2*precision*recall/(precision+recall)
print(tp,fp,fn,precision,recall,f1)
