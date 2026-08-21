import numpy as np
def joint_probability(table):
    p=np.asarray(table,float);
    if p.ndim!=2 or np.any(p<0) or p.sum()<=0: raise ValueError('invalid joint table')
    return p/p.sum()
def entropy(p):
    p=np.asarray(p,float); p=p/p.sum(); nz=p>0; return float(-np.sum(p[nz]*np.log2(p[nz])))
def mutual_information(table):
    p=joint_probability(table); px=p.sum(1,keepdims=True); py=p.sum(0,keepdims=True); expected=px@py; nz=p>0
    return float(np.sum(p[nz]*np.log2(p[nz]/expected[nz])))
independent=np.array([[.12,.18],[.28,.42]]); copied=np.array([[.5,0],[0,.5]]); dependent=np.array([[.4,.1],[.1,.4]])
mi_ind=mutual_information(independent); mi_copy=mutual_information(copied); mi_dep=mutual_information(dependent)

# ---- Use it ----
from sklearn.metrics import mutual_info_score
x=np.array([0,0,1,1]*100); y=x.copy(); sklearn_copy=float(mutual_info_score(x,y)/np.log(2))
