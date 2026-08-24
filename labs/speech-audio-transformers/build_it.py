import numpy as np
sr=16000; duration=.1
t=np.arange(int(sr*duration))/sr
wave=np.sin(2*np.pi*440*t)
frame=400; hop=160
frames=np.array([wave[i:i+frame] for i in range(0,len(wave)-frame+1,hop)])
rms=np.sqrt(np.mean(frames**2,axis=1))
