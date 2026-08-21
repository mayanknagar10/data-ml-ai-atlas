def expand(children,roots,max_depth):
    out=[]; frontier=[(root,0,(root,)) for root in roots]
    while frontier:
        node,depth,path=frontier.pop(0); out.append((node,depth))
        if depth==max_depth: continue
        for child in children.get(node,[]):
            if child in path: raise ValueError('cycle')
            frontier.append((child,depth+1,path+(child,)))
    return out
