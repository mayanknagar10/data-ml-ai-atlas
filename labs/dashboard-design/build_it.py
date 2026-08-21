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
