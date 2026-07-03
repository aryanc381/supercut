export type StorageProvider = "local" | "gdrive" | "cloud";

export interface StorageResult {
  provider: StorageProvider;
  path: string;
  url?: string;
  size: number;
}
