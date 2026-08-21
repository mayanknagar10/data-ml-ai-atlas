from shapely.geometry import Point, Polygon
poly=Polygon([(0,0),(2,0),(2,2),(0,2)])
points={'inside':Point(1,1),'edge':Point(2,1),'outside':Point(3,1)}
relations={name:{'within':p.within(poly),'intersects':p.intersects(poly),'covered_by':p.covered_by(poly)} for name,p in points.items()}
