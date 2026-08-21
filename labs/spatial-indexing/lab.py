from shapely.geometry import box, Point
from shapely.strtree import STRtree
geometries=[box(x,y,x+.8,y+.8) for x in range(20) for y in range(20)]; tree=STRtree(geometries)
query=Point(10.4,10.4).buffer(1.1); candidate_ids=tree.query(query); candidates=[geometries[int(i)] for i in candidate_ids]; indexed=[g for g in candidates if g.intersects(query)]
brute=[g for g in geometries if g.intersects(query)]

# ---- Use it ----
nearest_id=int(tree.nearest(Point(10.2,10.2))); nearest=geometries[nearest_id]; candidate_ratio=len(candidates)/len(geometries)

# ---- Verify it ----
assert {g.wkb for g in indexed}=={g.wkb for g in brute}
assert len(candidates)<len(geometries)/10 and candidate_ratio<.1
assert nearest.distance(Point(10.2,10.2))==0
far_query=box(100,100,101,101); assert len(tree.query(far_query))==0
# Envelope candidates may exceed exact results for a circular query.
assert len(candidates)>=len(indexed)>0
