import numpy as np
X=np.array([[-2,-1],[-1,-2],[-2,-2],[-1,-1],[1,1],[2,1],[1,3],[3,2]],float); y=np.array([0,0,0,0,1,1,1,1]); classes=np.unique(y)
means=np.array([X[y==c].mean(axis=0) for c in classes]); priors=np.array([(y==c).mean() for c in classes])
centered=np.vstack([X[y==c]-means[i] for i,c in enumerate(classes)]); shared=centered.T@centered/(len(X)-len(classes))
covs=np.array([np.cov(X[y==c],rowvar=False,bias=False) for c in classes])
def scores(Q,cov_list):
    out=[]
    for i,cov in enumerate(cov_list):
        sign,logdet=np.linalg.slogdet(cov); diff=np.asarray(Q)-means[i]
        out.append(-.5*logdet-.5*np.sum(diff*np.linalg.solve(cov,diff.T).T,axis=1)+np.log(priors[i]))
    return np.column_stack(out)
lda_scores=scores(X,[shared,shared]); qda_scores=scores(X,covs)

# ---- Use it ----
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis,QuadraticDiscriminantAnalysis
lda=LinearDiscriminantAnalysis().fit(X,y); qda=QuadraticDiscriminantAnalysis().fit(X,y)
lda_pred=lda.predict(X); qda_pred=qda.predict(X)
