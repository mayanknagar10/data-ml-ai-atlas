import numpy as np
import pandas as pd
train=pd.DataFrame({'age':[20.,30.,40.,50.],'income':[30.,50.,70.,90.],'city':['A','B','A','C']}); test=pd.DataFrame({'age':[60.],'income':[110.],'city':['Z']})
age_mean=train.age.mean(); age_std=train.age.std(ddof=0); manual_age=(train.age.to_numpy()-age_mean)/age_std

# ---- Use it ----
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler,OneHotEncoder
pre=ColumnTransformer([('num',StandardScaler(),['age','income']),('cat',OneHotEncoder(handle_unknown='ignore',sparse_output=False),['city'])],sparse_threshold=0).fit(train)
Xt=pre.transform(train); Xnew=pre.transform(test); names=pre.get_feature_names_out()
