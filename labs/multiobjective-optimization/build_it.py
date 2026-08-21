def dominates(a,b):
    return all(x<=y for x,y in zip(a,b)) and any(x<y for x,y in zip(a,b))
def pareto(points):
    return [p for i,p in enumerate(points) if not any(j!=i and dominates(q,p) for j,q in enumerate(points))]
def hypervolume_2d(front,reference):
    pts=sorted(pareto(front),key=lambda p:p[0])
    area=0.0; previous_y=reference[1]
    for x,y in pts:
        if y<previous_y:
            area+=(reference[0]-x)*(previous_y-y); previous_y=y
    return area
points=[(0.12,0.20),(0.10,0.35),(0.09,0.70),(0.13,0.50)]
front=pareto(points); hv=hypervolume_2d(front,(0.2,1.0))
