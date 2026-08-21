import numpy as np
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import brier_score_loss,roc_auc_score
X,y=make_classification(n_samples=1400,n_features=10,n_informative=6,class_sep=.8,random_state=6)
X_fit,X_rest,y_fit,y_rest=train_test_split(X,y,test_size=.5,stratify=y,random_state=1)
X_cal,X_test,y_cal,y_test=train_test_split(X_rest,y_rest,test_size=.5,stratify=y_rest,random_state=2)
base=LogisticRegression(max_iter=2000).fit(X_fit,y_fit)
def sigmoid(z): return 1/(1+np.exp(-z))
z_cal=3*base.decision_function(X_cal)+1; z_test=3*base.decision_function(X_test)+1
p_bad=sigmoid(z_test); calibrator=LogisticRegression(C=1e6,max_iter=2000).fit(z_cal[:,None],y_cal)
p_cal=calibrator.predict_proba(z_test[:,None])[:,1]

# ---- Use it ----
bad_brier=brier_score_loss(y_test,p_bad); calibrated_brier=brier_score_loss(y_test,p_cal)
bad_auc=roc_auc_score(y_test,p_bad); calibrated_auc=roc_auc_score(y_test,p_cal)
bins=np.linspace(0,1,6); ids=np.clip(np.digitize(p_cal,bins)-1,0,4); reliability=[(int((ids==b).sum()),float(p_cal[ids==b].mean()),float(y_test[ids==b].mean())) for b in range(5) if (ids==b).any()]

# ---- Verify it ----
assert calibrated_brier<bad_brier
assert abs(calibrated_auc-bad_auc)<1e-12
assert np.all((p_cal>=0)&(p_cal<=1))
assert sum(row[0] for row in reliability)==len(y_test)
assert set(np.arange(len(X_fit))).isdisjoint(np.arange(len(X_fit),len(X_fit)+len(X_cal)))
