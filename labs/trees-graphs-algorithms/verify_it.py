from collections import deque

def bfs_path(graph, source, target):
    queue = deque([source]); parent = {source: None}
    while queue:
        node = queue.popleft()
        if node == target: break
        for neighbor in graph.get(node, []):
            if neighbor not in parent:
                parent[neighbor] = node
                queue.append(neighbor)
    if target not in parent: return None
    path = []; node = target
    while node is not None:
        path.append(node); node = parent[node]
    return path[::-1]

# ---- Use it ----
import graphlib
dependencies = {'train': {'features'}, 'deploy': {'train'}, 'features': {'extract'}, 'extract': set()}
order = list(graphlib.TopologicalSorter(dependencies).static_order())

# ---- Verify it ----
graph = {'s':['a','b'], 'a':['c'], 'b':['c'], 'c':[]}
path = bfs_path(graph, 's', 'c')
assert path in (['s','a','c'], ['s','b','c'])
assert bfs_path(graph, 'c', 's') is None
pos = {node:i for i,node in enumerate(order)}
for node, needs in dependencies.items():
    assert all(pos[need] < pos[node] for need in needs)
try:
    list(graphlib.TopologicalSorter({'a': {'b'}, 'b': {'a'}}).static_order())
except graphlib.CycleError:
    pass
else:
    raise AssertionError('cycle must fail')
