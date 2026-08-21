stories=[{'id':'leakage-disagreement','competencies':{'conflict','quality','influence'},'stages':{'context','action','result','learning'},'owned':True},{'id':'migration-incident','competencies':{'failure','ownership','reliability'},'stages':{'context','action','result','learning'},'owned':True},{'id':'roadmap-cut','competencies':{'prioritization','ambiguity'},'stages':{'context','action','result','learning'},'owned':True},{'id':'mentoring','competencies':{'inclusion','support'},'stages':{'context','action','result','learning'},'owned':True}]
required={'conflict','quality','influence','failure','ownership','reliability','prioritization','ambiguity','inclusion','support'}
coverage=set().union(*(s['competencies'] for s in stories)); complete=[s['id'] for s in stories if s['stages']=={'context','action','result','learning'} and s['owned']]

# ---- Use it ----
assignments={'conflict':'leakage-disagreement','failure':'migration-incident','prioritization':'roadmap-cut','support':'mentoring'}
usage={s['id']:list(assignments.values()).count(s['id']) for s in stories}
