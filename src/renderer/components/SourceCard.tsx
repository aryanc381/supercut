import type { SourceType } from "../../shared/types/recording";

interface SourceCardProps {
  type: SourceType;
  label: string;
  selected: boolean;
  onSelect: (type: SourceType) => void;
}

const iconMap: Record<string, string> = {
  screen: "\u{1F5B5}",
  window: "\u{1FA9F}",
  region: "\u{2B1B}",
};

export default function SourceCard({
  type,
  label,
  selected,
  onSelect,
}: SourceCardProps) {
  return (
    <button
      onClick={() => onSelect(type)}
      style={{
        flex: 1,
        background: selected ? "#1a1a1a" : "#0f0f0f",
        border: selected
          ? "0.05vw solid #555"
          : "0.05vw solid #1a1a1a",
        borderRadius: "0.1vw",
        padding: "1.5vw",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5vw",
        transition: "all 0.15s",
      }}
    >
      <span style={{ fontSize: "2vw" }}>{iconMap[type]}</span>
      <span
        style={{
          fontSize: "0.9vw",
          color: selected ? "#fff" : "#888",
          fontFamily: "Inter Tight, sans-serif",
          fontWeight: 500,
        }}
      >
        {label}
      </span>
    </button>
  );
}
