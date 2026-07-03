interface ToggleProps {
  label: string;
  enabled: boolean;
  onToggle: () => void;
}

export default function Toggle({ label, enabled, onToggle }: ToggleProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.6vw 0" }}>
      <span style={{ fontSize: "0.85vw", color: "#aaa", fontFamily: "Inter Tight, sans-serif" }}>{label}</span>
      <button onClick={onToggle} style={{ width: "2.2vw", height: "1.2vw", borderRadius: "0.6vw", border: "none", background: enabled ? "#555" : "#222", cursor: "pointer", position: "relative", transition: "background 0.15s" }}>
        <div style={{ width: "0.9vw", height: "0.9vw", borderRadius: "50%", background: enabled ? "#fff" : "#555", position: "absolute", top: "0.15vw", left: enabled ? "1.15vw" : "0.15vw", transition: "left 0.15s" }} />
      </button>
    </div>
  );
}
