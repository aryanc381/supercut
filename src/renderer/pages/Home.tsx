import { useState } from "react";
import type { SourceType, RecordingConfig } from "../../shared/types/recording";
import SourceCard from "../components/SourceCard";
import Toggle from "../components/Toggle";
import RecordButton from "../components/RecordButton";

export default function Home() {
  const [source, setSource] = useState<SourceType>("screen");
  const [mic, setMic] = useState(true);
  const [camera, setCamera] = useState(false);
  const [systemAudio, setSystemAudio] = useState(false);

  const config: RecordingConfig = {
    source: { type: source },
    micEnabled: mic,
    cameraEnabled: camera,
    systemAudioEnabled: systemAudio,
  };

  function handleRecord() {
    window.api.startRecording(config);
  }

  return (
    <div className="w-screen h-screen flex flex-col rounded-sm overflow-hidden" style={{ background: "#0f0f0fcc", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
      <div className="flex items-center justify-center py-2 cursor-grab active:cursor-grabbing drag-region">
        <span className="text-[#555] text-xs font-medium tracking-widest uppercase">Supercut</span>
      </div>

      <div className="flex-1 flex flex-col gap-4 px-4 pb-4">
        <div className="flex gap-1.5">
          <SourceCard type="screen" label="Full Screen" selected={source === "screen"} onSelect={() => setSource("screen")} />
          <SourceCard type="window" label="Window" selected={source === "window"} onSelect={() => setSource("window")} />
          <SourceCard type="region" label="Custom" selected={source === "region"} onSelect={() => setSource("region")} />
        </div>

        <div className="rounded-sm bg-[#0a0a0a] px-3 py-2">
          <Toggle label="Microphone" enabled={mic} onToggle={() => setMic(!mic)} />
          <Toggle label="Camera" enabled={camera} onToggle={() => setCamera(!camera)} />
          <Toggle label="System Audio" enabled={systemAudio} onToggle={() => setSystemAudio(!systemAudio)} />
        </div>

        <RecordButton onClick={handleRecord} />
      </div>
    </div>
  );
}
