import numpy as np
fs=16000; t=np.arange(fs)/fs
x=np.sin(2*np.pi*440*t)+.3*np.sin(2*np.pi*880*t)
