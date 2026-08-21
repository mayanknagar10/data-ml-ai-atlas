import numpy as np
fs=16000; t=np.arange(fs)/fs
x=np.sin(2*np.pi*440*t)+.3*np.sin(2*np.pi*880*t)

# ---- Use it ----
from scipy.signal import stft
f,tt,Z=stft(x,fs=fs,nperseg=400,noverlap=240)
mag=np.abs(Z)
print(mag.shape,f[mag.mean(axis=1).argmax()])

# ---- Verify it ----
assert mag.shape[0]>100 and mag.shape[1]>10
