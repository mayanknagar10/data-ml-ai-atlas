def matmul(a,b):
    if not a or not b or len(a[0])!=len(b): raise ValueError('shape mismatch')
    if any(len(row)!=len(a[0]) for row in a) or any(len(row)!=len(b[0]) for row in b): raise ValueError('ragged')
    return [[sum(a[i][k]*b[k][j] for k in range(len(b))) for j in range(len(b[0]))] for i in range(len(a))]

def transpose(a):
    return [list(col) for col in zip(*a)]
