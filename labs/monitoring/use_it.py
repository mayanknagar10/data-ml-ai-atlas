import numpy as np
registry=[]
def register(version,metric):
    registry.append({"version":version,"metric":metric}); return registry[-1]
register("v1",.81); register("v2",.84)
champion=max(registry,key=lambda x:x["metric"])
train=np.array([0.,0.,1.,1.,2.,2.]); live=np.array([1.,1.,2.,2.,3.,3.])
drift=float(abs(live.mean()-train.mean()))

# ---- Use it ----
release={"candidate":champion["version"],"metric":champion["metric"],"drift":drift,"rollback":"v1"}
