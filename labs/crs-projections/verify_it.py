import math, numpy as np
R=6378137.0
def mercator(lon_deg,lat_deg):
    if not -85.05112878<=lat_deg<=85.05112878: raise ValueError('outside Web Mercator latitude domain')
    lon,lat=map(math.radians,(lon_deg,lat_deg)); return R*lon,R*math.log(math.tan(math.pi/4+lat/2))
def inverse(x,y): return math.degrees(x/R),math.degrees(2*math.atan(math.exp(y/R))-math.pi/2)
points=[(0,0),(-73.9857,40.7484),(12.4924,41.8902),(151.2093,-33.8688)]; projected=[mercator(*p) for p in points]; roundtrips=[inverse(*p) for p in projected]

# ---- Use it ----
from pyproj import Transformer
transformer=Transformer.from_crs('EPSG:4326','EPSG:3857',always_xy=True); library=[transformer.transform(*p) for p in points]
scale_0=1/math.cos(math.radians(0)); scale_60=1/math.cos(math.radians(60))

# ---- Verify it ----
assert np.allclose(roundtrips,points,atol=1e-9)
assert np.allclose(projected,library,atol=1e-6)
assert abs(scale_0-1)<1e-12 and abs(scale_60-2)<1e-12
x1,_=mercator(1,0); x2,_=mercator(2,0); assert abs((x2-x1)-R*math.radians(1))<1e-7
try: mercator(0,89)
except ValueError: pass
else: raise AssertionError('projection domain must be enforced')
