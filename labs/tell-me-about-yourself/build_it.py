segments=[{'stage':'present','words':32,'competencies':{'ml-systems','reliability'},'evidence':True,'ownership':True},{'stage':'past','words':58,'competencies':{'data-contracts','delivery'},'evidence':True,'ownership':True},{'stage':'past','words':39,'competencies':{'evaluation','product'},'evidence':True,'ownership':True},{'stage':'future','words':28,'competencies':{'ml-systems','platform'},'evidence':True,'ownership':True}]
role={'ml-systems','reliability','platform','evaluation'}
def audit(parts,words_per_second=2.3):
    total=sum(p['words'] for p in parts); covered=set().union(*(p['competencies'] for p in parts))&role
    return {'words':total,'seconds':total/words_per_second,'coverage':len(covered)/len(role),'stages':[p['stage'] for p in parts],'unsupported':[i for i,p in enumerate(parts) if not p['evidence'] or not p['ownership']] }
report=audit(segments)
