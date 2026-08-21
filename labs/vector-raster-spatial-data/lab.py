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

# ---- Use it ----
# Shapely supplies exact geometry predicates while NumPy performs masked array aggregation.
cell_area=abs(dx*dy); represented_area=float(selected.sum()*cell_area); expected_bounds=(110.0,160.0,140.0,190.0)

# ---- Verify it ----
assert center(0,0)==(105.0,195.0) and center(4,4)==(145.0,155.0)
assert zone.bounds==expected_bounds and selected.sum()==9
assert represented_area==zone.area==900.0
assert zonal_sum==117.0 and zonal_mean==13.0
assert not selected[0,0] and raster[0,0]==1.0
# Moving the grid changes which centers represent the polygon.
old=center(1,1); x0+=5; shifted=center(1,1); assert shifted[0]-old[0]==5; x0-=5
