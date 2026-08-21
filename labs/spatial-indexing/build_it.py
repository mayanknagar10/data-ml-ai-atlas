from shapely.geometry import box, Point
from shapely.strtree import STRtree
geometries=[box(x,y,x+.8,y+.8) for x in range(20) for y in range(20)]; tree=STRtree(geometries)
query=Point(10.4,10.4).buffer(1.1); candidate_ids=tree.query(query); candidates=[geometries[int(i)] for i in candidate_ids]; indexed=[g for g in candidates if g.intersects(query)]
brute=[g for g in geometries if g.intersects(query)]
