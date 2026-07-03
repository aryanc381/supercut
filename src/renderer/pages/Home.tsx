import { useState } from "react";
import type { SourceType } from "../../shared/types/recording";

type Mode = "display" | "window" | "area" | "camera";

const modes: { key: Mode; label: string }[] = [
  { key: "display", label: "screen" },
  { key: "window", label: "window" },
  { key: "area", label: "area" },
  { key: "camera", label: "camera" },
];

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
      <circle cx="12" cy="5" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="12" cy="19" r="2" />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

function CameraOutlineIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D2D2D2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 7l-7 5 7 5V7z" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D2D2D2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D2D2D2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

const navIcons: Record<Mode, (color: string) => React.ReactNode> = {
  display: (color) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  window: (color) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <rect x="6" y="7" width="12" height="8" rx="1" />
    </svg>
  ),
  area: (color) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="3" x2="9" y2="21" />
    </svg>
  ),
  camera: (color) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
};

export default function Home() {
  const [activeMode, setActiveMode] = useState<Mode>("window");

  function handleRecord() {
    window.api.startRecording({ source: { type: activeMode as SourceType }, micEnabled: false, cameraEnabled: false, systemAudioEnabled: false });
  }

  return (
    <div
      className="flex flex-col h-screen"
      style={{
        padding: "18px",
        background: "#242424",
        borderRadius: "28px",
        boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
        overflow: "hidden",
      }}
    >
      <div className="flex items-center justify-between drag-region cursor-grab active:cursor-grabbing" style={{ height: "48px" }}>
        <button className="flex items-center justify-center rounded-lg transition-colors duration-150 hover:bg-[rgba(255,255,255,0.08)]" style={{ width: "36px", height: "36px" }}>
          <CloseIcon />
        </button>
        <button className="flex items-center justify-center rounded-lg transition-colors duration-150 hover:bg-[rgba(255,255,255,0.08)]" style={{ width: "36px", height: "36px" }}>
          <MoreIcon />
        </button>
      </div>

      <div className="w-full relative overflow-hidden flex-shrink-0" style={{ height: "260px", borderRadius: "22px", background: "#1a1a1a", marginTop: "8px" }}>
        <div className="absolute bottom-[18px] right-[18px] flex items-center gap-[6px] px-[10px] py-[6px] rounded-lg" style={{ background: "rgba(0,0,0,0.35)", fontSize: "18px", fontWeight: 600, color: "white" }}>
          <MonitorIcon />
          <span>4K</span>
        </div>
      </div>

      <div className="flex flex-col flex-shrink-0" style={{ marginTop: "14px", gap: "10px" }}>
        <button className="flex items-center justify-between cursor-pointer" style={{ height: "44px" }}>
          <div className="flex items-center gap-3">
            <CameraOutlineIcon />
            <span style={{ fontSize: "16px", fontWeight: 500, color: "#D7D7D7" }}>MacBook Air Camera</span>
          </div>
          <ChevronDown />
        </button>

        <button className="flex items-center justify-between cursor-pointer" style={{ height: "44px" }}>
          <div className="flex items-center gap-3">
            <MicIcon />
            <span style={{ fontSize: "16px", fontWeight: 500, color: "#D7D7D7" }}>MacBook Air Microphone</span>
          </div>
          <ChevronDown />
        </button>
      </div>

      <button
        onClick={handleRecord}
        className="w-full flex items-center justify-center border-none cursor-pointer transition-colors duration-150 hover:bg-[#FF1E63] active:bg-[#E50048] flex-shrink-0"
        style={{ height: "76px", borderRadius: "20px", background: "#FF0050", gap: "12px", marginTop: "20px" }}
      >
        <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: "white" }} />
        <span style={{ fontSize: "30px", fontWeight: 700, color: "white" }}>Record Window</span>
      </button>

      <div className="flex items-center justify-around flex-shrink-0" style={{ marginTop: "20px" }}>
        {modes.map(({ key }) => {
          const isActive = activeMode === key;
          return (
            <button
              key={key}
              onClick={() => setActiveMode(key)}
              className="flex items-center justify-center transition-all duration-150"
              style={{
                padding: "6px",
                borderRadius: "8px",
                border: isActive ? "2px solid white" : "2px solid transparent",
                opacity: isActive ? 1 : 0.7,
                cursor: "pointer",
                background: "none",
              }}
            >
              {navIcons[key](isActive ? "white" : "#888")}
            </button>
          );
        })}
      </div>
    </div>
  );
}
