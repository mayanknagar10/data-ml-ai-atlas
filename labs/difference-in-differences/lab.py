treated_pre=100; treated_post=130
control_pre=90; control_post=100
did=(treated_post-treated_pre)-(control_post-control_pre)
print('DiD',did)

# ---- Use it ----
import pandas as pd, statsmodels.formula.api as smf
df=pd.DataFrame({'y':[100,130,90,100],'treated':[1,1,0,0],'post':[0,1,0,1]})
fit=smf.ols('y ~ treated + post + treated:post',data=df).fit()
print(fit.params['treated:post'])

# ---- Verify it ----
assert abs(did-20)<1e-9
