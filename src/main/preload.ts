import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  startRecording: (config: any) =>
    ipcRenderer.invoke("recording:start", config),
  stopRecording: () => ipcRenderer.invoke("recording:stop"),
  pauseRecording: () => ipcRenderer.invoke("recording:pause"),
  resumeRecording: () => ipcRenderer.invoke("recording:resume"),
  getSources: () => ipcRenderer.invoke("recording:get-sources"),
  saveFile: (options: any) => ipcRenderer.invoke("export:save", options),
  onRecordingState: (cb: (state: any) => void) =>
    ipcRenderer.on("recording:state", (_e, state) => cb(state)),
});
