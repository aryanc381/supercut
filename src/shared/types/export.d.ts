export type Format = "mp4" | "webm" | "gif";
export type Quality = "high" | "medium" | "low";
export interface ExportOptions {
    format: Format;
    quality: Quality;
    trimStart?: number;
    trimEnd?: number;
}
export interface ExportProgress {
    stage: "processing" | "saving" | "uploading";
    percent: number;
}
//# sourceMappingURL=export.d.ts.map