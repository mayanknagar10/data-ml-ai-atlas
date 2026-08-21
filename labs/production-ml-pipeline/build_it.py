from dataclasses import dataclass
@dataclass
class ModelArtifact:
    version:str; feature_schema:str; metric:float; uri:str

def promote(a, min_metric=.80):
    if a.metric < min_metric: raise ValueError('quality gate failed')
    return {'production_version':a.version,'artifact_uri':a.uri}
