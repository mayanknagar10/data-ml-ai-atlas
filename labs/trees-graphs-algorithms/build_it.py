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
