treated_pre=100; treated_post=130
control_pre=90; control_post=100
did=(treated_post-treated_pre)-(control_post-control_pre)
print('DiD',did)
