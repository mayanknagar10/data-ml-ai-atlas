import numpy as np
rng=np.random.default_rng(13); n=1200; S=np.column_stack([rng.laplace(size=n),rng.uniform(-np.sqrt(3),np.sqrt(3),n)]); S=(S-S.mean(axis=0))/S.std(axis=0); A=np.array([[1,.6],[.4,1.2]]); X=S@A.T
