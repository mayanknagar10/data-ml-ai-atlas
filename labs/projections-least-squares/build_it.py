def solve_two_by_two(a,b,c,d,u,v):
    det=a*d-b*c
    if abs(det)<1e-12: raise ValueError('singular')
    return ((u*d-b*v)/det,(a*v-u*c)/det)

def least_squares_line(xs,ys):
    n=len(xs); sx=sum(xs); sxx=sum(x*x for x in xs); sy=sum(ys); sxy=sum(x*y for x,y in zip(xs,ys))
    return solve_two_by_two(n,sx,sx,sxx,sy,sxy)
