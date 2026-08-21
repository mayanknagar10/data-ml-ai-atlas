def topo(graph):
    indegree={node:0 for node in graph}
    children={node:[] for node in graph}
    for node,deps in graph.items():
        for dep in deps:
            if dep not in graph: raise KeyError(dep)
            indegree[node]+=1; children[dep].append(node)
    ready=sorted(node for node,n in indegree.items() if n==0); order=[]
    while ready:
        node=ready.pop(0); order.append(node)
        for child in sorted(children[node]):
            indegree[child]-=1
            if indegree[child]==0: ready.append(child); ready.sort()
    if len(order)!=len(graph): raise ValueError('cycle')
    return order

def relation(target,node):
    return f'{target}__{node}'

# ---- Use it ----
import sqlite3
graph={'stg_orders':[],'stg_items':[],'int_lines':['stg_orders','stg_items'],'fct_lines':['int_lines']}
con=sqlite3.connect(':memory:')
for node in topo(graph):
    con.execute('CREATE TABLE '+relation('pr42',node)+'(built INTEGER)')
    con.execute('INSERT INTO '+relation('pr42',node)+' VALUES(1)')
