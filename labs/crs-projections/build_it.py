import math, numpy as np
R=6378137.0
def mercator(lon_deg,lat_deg):
    if not -85.05112878<=lat_deg<=85.05112878: raise ValueError('outside Web Mercator latitude domain')
    lon,lat=map(math.radians,(lon_deg,lat_deg)); return R*lon,R*math.log(math.tan(math.pi/4+lat/2))
def inverse(x,y): return math.degrees(x/R),math.degrees(2*math.atan(math.exp(y/R))-math.pi/2)
points=[(0,0),(-73.9857,40.7484),(12.4924,41.8902),(151.2093,-33.8688)]; projected=[mercator(*p) for p in points]; roundtrips=[inverse(*p) for p in projected]
