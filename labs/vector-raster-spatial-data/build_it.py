import numpy as np
from shapely.geometry import Point, Polygon
raster=np.arange(1,26,dtype=float).reshape(5,5); valid=np.ones_like(raster,dtype=bool); valid[0,0]=False
x0,y0,dx,dy=100.0,200.0,10.0,-10.0
def center(row,col): return x0+(col+.5)*dx, y0+(row+.5)*dy
zone=Polygon([(110,190),(140,190),(140,160),(110,160)])
inside=np.zeros_like(valid)
for row in range(raster.shape[0]):
    for col in range(raster.shape[1]): inside[row,col]=zone.covers(Point(*center(row,col)))
selected=inside&valid; zonal_sum=float(raster[selected].sum()); zonal_mean=float(raster[selected].mean())
