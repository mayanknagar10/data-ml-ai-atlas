from dataclasses import dataclass

@dataclass
class Metric:
    value: float
    lower: float
    upper: float
    sample_size: int
    freshness_minutes: int
    complete: bool

def status(metric,minimum,freshness_slo,min_n):
    if not metric.complete: return 'unknown: incomplete'
    if metric.freshness_minutes>freshness_slo: return 'unknown: stale'
    if metric.sample_size<min_n: return 'unknown: low support'
    if metric.upper<minimum: return 'harm'
    if metric.lower>=minimum: return 'healthy'
    return 'uncertain'

good=Metric(0.94,0.93,0.95,5000,10,True)
stale=Metric(0.99,0.98,1.0,5000,180,True)

# ---- Use it ----
import pandas as pd
frame=pd.DataFrame([good.__dict__,stale.__dict__])
frame['state']=[status(m,0.90,60,1000) for m in (good,stale)]

# ---- Verify it ----
assert status(good,0.90,60,1000)=='healthy'
assert status(stale,0.90,60,1000)=='unknown: stale'
assert status(Metric(0.85,0.80,0.89,5000,5,True),0.90,60,1000)=='harm'
assert status(Metric(0.91,0.88,0.94,5000,5,True),0.90,60,1000)=='uncertain'
assert status(Metric(0.99,0.98,1.0,5,5,True),0.90,60,1000)=='unknown: low support'
assert list(frame['state'])==['healthy','unknown: stale']
