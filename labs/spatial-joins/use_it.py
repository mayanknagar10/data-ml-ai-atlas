from shapely.geometry import Point, Polygon
poly=Polygon([(0,0),(2,0),(2,2),(0,2)])
points={'inside':Point(1,1),'edge':Point(2,1),'outside':Point(3,1)}
relations={name:{'within':p.within(poly),'intersects':p.intersects(poly),'covered_by':p.covered_by(poly)} for name,p in points.items()}

# ---- Use it ----
import geopandas as gpd
left=gpd.GeoDataFrame({'name':list(points)},geometry=list(points.values()),crs='EPSG:3857'); right=gpd.GeoDataFrame({'zone':['A']},geometry=[poly],crs='EPSG:3857')
within_join=gpd.sjoin(left,right,how='left',predicate='within'); intersects_join=gpd.sjoin(left,right,how='left',predicate='intersects')
