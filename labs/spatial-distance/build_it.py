import math, numpy as np
R=6371.0088
def haversine(a,b):
    lat1,lon1=map(math.radians,a); lat2,lon2=map(math.radians,b); dlat=lat2-lat1; dlon=(lon2-lon1+math.pi)%(2*math.pi)-math.pi
    h=math.sin(dlat/2)**2+math.cos(lat1)*math.cos(lat2)*math.sin(dlon/2)**2
    return 2*R*math.asin(math.sqrt(min(1,max(0,h))))
london=(51.5074,-.1278); paris=(48.8566,2.3522); spherical=haversine(london,paris)
