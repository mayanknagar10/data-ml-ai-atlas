# Maximize 3*x + 2*y subject to x+y<=4, x<=2, x,y>=0
# Inspect corner points for a tiny LP.
pts=[(0,0),(2,0),(0,4),(2,2)]
best=max(pts,key=lambda p:3*p[0]+2*p[1])
print(best,3*best[0]+2*best[1])
