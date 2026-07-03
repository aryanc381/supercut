import { useState } from "react";
import Header from "../components/Header";
import CameraPreview from "../components/CameraPreview";
import DeviceSelector from "../components/DeviceSelector";
import RecordButton from "../components/RecordButton";
import BottomNav from "../components/BottomNav";
import type { SourceType } from "../../shared/types/recording";

type Mode = "display" | "window" | "area" | "camera";

const sourceMap: Record<Mode, SourceType> = { display: "screen", window: "window", area: "region", camera: "screen" };

export default function Home() {
  const [mode, setMode] = useState<Mode>("window");

  function handleRecord() {
    window.api.startRecording({ source: { type: sourceMap[mode] }, micEnabled: false, cameraEnabled: false, systemAudioEnabled: false });
  }

  return (
    <div className="flex flex-col h-screen p-[18px] bg-[#242424] rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.45)] overflow-hidden">
      <Header />
      <div className="mt-[14px]" />
      <CameraPreview />
      <div className="mt-[18px]" />
      <DeviceSelector type="camera" label="MacBook Air Camera" />
      <div className="mt-[12px]" />
      <DeviceSelector type="microphone" label="MacBook Air Microphone" />
      <div className="mt-[24px]" />
      <RecordButton mode={mode} onClick={handleRecord} />
      <div className="mt-[24px]" />
      <BottomNav active={mode} onChange={setMode} />
    </div>
  );
}
