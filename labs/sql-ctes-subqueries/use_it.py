def expand(children,roots,max_depth):
    out=[]; frontier=[(root,0,(root,)) for root in roots]
    while frontier:
        node,depth,path=frontier.pop(0); out.append((node,depth))
        if depth==max_depth: continue
        for child in children.get(node,[]):
            if child in path: raise ValueError('cycle')
            frontier.append((child,depth+1,path+(child,)))
    return out

# ---- Use it ----
import sqlite3
con=sqlite3.connect(':memory:')
con.executescript('CREATE TABLE edge(parent TEXT, child TEXT); INSERT INTO edge VALUES ("a","b"),("a","c"),("b","d");')
rows=con.execute('WITH RECURSIVE tree(node,depth,path) AS (SELECT "a",0,"/a/" UNION ALL SELECT e.child,t.depth+1,t.path||e.child||"/" FROM tree t JOIN edge e ON e.parent=t.node WHERE t.depth<10 AND instr(t.path,"/"||e.child||"/")=0) SELECT node,depth FROM tree ORDER BY depth,node').fetchall()
