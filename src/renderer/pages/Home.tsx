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
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "30vw",
          display: "flex",
          flexDirection: "column",
          gap: "1.5vw",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <span
            style={{
              fontSize: "1.4vw",
              fontWeight: 600,
              color: "#fff",
            }}
          >
            New Recording
          </span>
        </div>

        <div style={{ display: "flex", gap: "0.5vw" }}>
          <SourceCard
            type="screen"
            label="Full Screen"
            selected={source === "screen"}
            onSelect={() => setSource("screen")}
          />
          <SourceCard
            type="window"
            label="Window"
            selected={source === "window"}
            onSelect={() => setSource("window")}
          />
          <SourceCard
            type="region"
            label="Custom"
            selected={source === "region"}
            onSelect={() => setSource("region")}
          />
        </div>

        <div
          style={{
            background: "#0f0f0f",
            borderRadius: "0.1vw",
            border: "0.05vw solid #1a1a1a",
            padding: "0.8vw 1vw",
          }}
        >
          <Toggle
            label="Microphone"
            enabled={mic}
            onToggle={() => setMic(!mic)}
          />
          <Toggle
            label="Camera"
            enabled={camera}
            onToggle={() => setCamera(!camera)}
          />
          <Toggle
            label="System Audio"
            enabled={systemAudio}
            onToggle={() => setSystemAudio(!systemAudio)}
          />
        </div>

        <RecordButton onClick={handleRecord} />
      </div>
    </div>
  );
}
