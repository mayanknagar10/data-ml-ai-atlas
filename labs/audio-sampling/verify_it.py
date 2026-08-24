import numpy as np
sr=16000; duration=.1
t=np.arange(int(sr*duration))/sr
wave=np.sin(2*np.pi*440*t)
frame=400; hop=160
frames=np.array([wave[i:i+frame] for i in range(0,len(wave)-frame+1,hop)])
rms=np.sqrt(np.mean(frames**2,axis=1))

# ---- Use it ----
spectrum=np.abs(np.fft.rfft(frames[0]))
peak_bin=int(np.argmax(spectrum)); peak_hz=peak_bin*sr/frame

# ---- Verify it ----
assert frames.ndim==2 and frames.shape[1]==400
assert np.all(rms>0)
assert abs(peak_hz-440)<=sr/frame
assert len(spectrum)==frame//2+1
