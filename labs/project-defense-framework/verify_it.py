claims=[{'id':'quality','requires':{'baseline','chronological-test','slice-results'}},{'id':'latency','requires':{'load-test','p95-dashboard'}},{'id':'reliability','requires':{'fallback-test','rollback-runbook'}},{'id':'impact','requires':{'experiment','guardrail-results'}}]
evidence={'baseline','chronological-test','slice-results','load-test','p95-dashboard','fallback-test','rollback-runbook','guardrail-results'}
def missing(claims,evidence): return {c['id']:sorted(c['requires']-evidence) for c in claims if c['requires']-evidence}
alternatives={'rules':{'quality':2,'latency':5,'cost':5},'embedding':{'quality':5,'latency':3,'cost':3},'large-model':{'quality':5,'latency':1,'cost':1}}
def rank(weights): return sorted(alternatives,key=lambda a:sum(weights[k]*alternatives[a][k] for k in weights),reverse=True)

# ---- Use it ----
audit=missing(claims,evidence); balanced=rank({'quality':.5,'latency':.3,'cost':.2}); cost_sensitive=rank({'quality':.2,'latency':.3,'cost':.5})

# ---- Verify it ----
assert audit=={'impact':['experiment']}
assert balanced[0]=='embedding' and cost_sensitive[0]=='rules'
assert set(alternatives)==set(balanced)==set(cost_sensitive)
complete=evidence|{'experiment'}; assert missing(claims,complete)=={}
assert all(abs(sum(w.values())-1)<1e-12 for w in [{'quality':.5,'latency':.3,'cost':.2},{'quality':.2,'latency':.3,'cost':.5}])
