import math, numpy as np
R=6371.0088
def haversine(a,b):
    lat1,lon1=map(math.radians,a); lat2,lon2=map(math.radians,b); dlat=lat2-lat1; dlon=(lon2-lon1+math.pi)%(2*math.pi)-math.pi
    h=math.sin(dlat/2)**2+math.cos(lat1)*math.cos(lat2)*math.sin(dlon/2)**2
    return 2*R*math.asin(math.sqrt(min(1,max(0,h))))
london=(51.5074,-.1278); paris=(48.8566,2.3522); spherical=haversine(london,paris)

# ---- Use it ----
from pyproj import Geod
from sklearn.neighbors import BallTree
geod=Geod(ellps='WGS84'); _,_,meters=geod.inv(london[1],london[0],paris[1],paris[0]); ellipsoidal=meters/1000
cities=np.radians(np.array([london,paris,(52.52,13.405),(40.7128,-74.006)])); tree=BallTree(cities,metric='haversine'); angular,indices=tree.query(np.radians([[50.0,1.0]]),k=2); nearest=indices[0].tolist()

# ---- Verify it ----
assert 340<spherical<350 and 340<ellipsoidal<350
assert abs(spherical-ellipsoidal)/ellipsoidal<.01
assert abs(haversine(london,paris)-haversine(paris,london))<1e-12 and haversine(london,london)==0
assert haversine((0,179.9),(0,-179.9))<25
assert nearest==[1,0] and np.all(np.diff(angular[0])>=0)
assert abs(angular[0,0]*R-haversine((50.0,1.0),paris))<1e-9
