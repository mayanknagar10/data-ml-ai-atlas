claims=[{'id':'quality','requires':{'baseline','chronological-test','slice-results'}},{'id':'latency','requires':{'load-test','p95-dashboard'}},{'id':'reliability','requires':{'fallback-test','rollback-runbook'}},{'id':'impact','requires':{'experiment','guardrail-results'}}]
evidence={'baseline','chronological-test','slice-results','load-test','p95-dashboard','fallback-test','rollback-runbook','guardrail-results'}
def missing(claims,evidence): return {c['id']:sorted(c['requires']-evidence) for c in claims if c['requires']-evidence}
alternatives={'rules':{'quality':2,'latency':5,'cost':5},'embedding':{'quality':5,'latency':3,'cost':3},'large-model':{'quality':5,'latency':1,'cost':1}}
def rank(weights): return sorted(alternatives,key=lambda a:sum(weights[k]*alternatives[a][k] for k in weights),reverse=True)
