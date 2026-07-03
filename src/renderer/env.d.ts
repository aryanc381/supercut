import type { RecordingConfig } from "../shared/types/recording";

interface Api {
  startRecording: (config: RecordingConfig) => Promise<void>;
  stopRecording: () => Promise<void>;
  pauseRecording: () => Promise<void>;
  resumeRecording: () => Promise<void>;
  getSources: () => Promise<any[]>;
  saveFile: (options: any) => Promise<string>;
  onRecordingState: (cb: (state: any) => void) => void;
}

declare global {
  interface Window {
    api: Api;
  }
}
