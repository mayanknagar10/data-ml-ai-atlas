import numpy as np
def fit_context(values,contexts):
    model={}
    for c in np.unique(contexts):
        x=np.asarray(values)[np.asarray(contexts)==c]
        med=np.median(x); mad=np.median(np.abs(x-med))
        model[c]=(med,max(1.4826*mad,1e-9))
    return model
def contextual_score(values,contexts,model):
    return np.array([abs(x-model[c][0])/model[c][1] for x,c in zip(values,contexts)])
def rolling_count(flags,width):
    flags=np.asarray(flags,int); cs=np.r_[0,np.cumsum(flags)]
    return np.array([cs[i+1]-cs[max(0,i+1-width)] for i in range(len(flags))])
ref_values=np.array([18,20,22,19,21,580,600,620,590,610],float)
ref_context=np.array(['personal']*5+['wholesale']*5)
model=fit_context(ref_values,ref_context)
values=np.array([590,590,20,20,20,20,20],float)
contexts=np.array(['personal','wholesale']+['personal']*5)
scores=contextual_score(values,contexts,model)
burst=rolling_count(np.array([0,0,1,1,1,1,1]),width=4)

# ---- Use it ----
from sklearn.preprocessing import StandardScaler
scaler=StandardScaler().fit(ref_values[:,None])
global_scores=np.abs(scaler.transform(values[:,None]).ravel())
