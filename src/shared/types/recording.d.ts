export type SourceType = "screen" | "window" | "region";
export interface RecordingSource {
    type: SourceType;
    displayId?: string;
    windowId?: string;
    bounds?: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
}
export interface RecordingConfig {
    source: RecordingSource;
    micEnabled: boolean;
    systemAudioEnabled: boolean;
    cameraEnabled: boolean;
}
export interface RecordingState {
    isRecording: boolean;
    isPaused: boolean;
    elapsed: number;
    filePath: string | null;
}
//# sourceMappingURL=recording.d.ts.map