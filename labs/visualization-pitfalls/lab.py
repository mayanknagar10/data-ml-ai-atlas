import math

def audit(spec):
    errors=[]
    if spec['mark']=='bar' and spec.get('baseline',0)!=0: errors.append('truncated bar baseline')
    times=spec.get('times',[])
    if times and times!=sorted(times): errors.append('time not ordered')
    if len(set(spec.get('denominator_definition',[])))>1: errors.append('denominator changed')
    if spec.get('size_encoding')=='radius=value': errors.append('area distortion')
    return errors

good={'mark':'bar','baseline':0,'times':[1,2,3],'denominator_definition':['eligible']*3}
bad={'mark':'bar','baseline':95,'times':[1,3,2],'denominator_definition':['all','matured','matured'],'size_encoding':'radius=value'}

# ---- Use it ----
import numpy as np
values=np.asarray([1.0,4.0,9.0])
radii=np.sqrt(values)
areas=np.pi*radii**2

# ---- Verify it ----
assert audit(good)==[]
issues=audit(bad)
assert set(issues)=={'truncated bar baseline','time not ordered','denominator changed','area distortion'}
assert np.allclose(areas/areas[0],values/values[0])
assert len(issues)==4
