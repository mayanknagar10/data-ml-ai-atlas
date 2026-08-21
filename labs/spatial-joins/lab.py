from shapely.geometry import Point, Polygon
poly=Polygon([(0,0),(2,0),(2,2),(0,2)])
points={'inside':Point(1,1),'edge':Point(2,1),'outside':Point(3,1)}
relations={name:{'within':p.within(poly),'intersects':p.intersects(poly),'covered_by':p.covered_by(poly)} for name,p in points.items()}

# ---- Use it ----
import geopandas as gpd
left=gpd.GeoDataFrame({'name':list(points)},geometry=list(points.values()),crs='EPSG:3857'); right=gpd.GeoDataFrame({'zone':['A']},geometry=[poly],crs='EPSG:3857')
within_join=gpd.sjoin(left,right,how='left',predicate='within'); intersects_join=gpd.sjoin(left,right,how='left',predicate='intersects')

# ---- Verify it ----
assert relations['inside']=={'within':True,'intersects':True,'covered_by':True}
assert relations['edge']=={'within':False,'intersects':True,'covered_by':True}
assert relations['outside']=={'within':False,'intersects':False,'covered_by':False}
assert within_join['zone'].notna().sum()==1 and intersects_join['zone'].notna().sum()==2
assert set(within_join['name'])==set(points) and len(within_join)==3
assert poly.is_valid and poly.area==4
