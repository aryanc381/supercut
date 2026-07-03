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

export default function SourceCard({ type, label, selected, onSelect }: SourceCardProps) {
  return (
    <button
      onClick={() => onSelect(type)}
      className={`flex flex-col items-center gap-1.5 flex-1 rounded-sm cursor-pointer transition-all duration-150 p-3 ${
        selected ? "bg-[#1a1a1a] border border-[#555]" : "bg-[#0f0f0f] border border-transparent"
      }`}
    >
      <span className="text-2xl">{iconMap[type]}</span>
      <span className={`text-xs font-medium ${selected ? "text-white" : "text-[#888]"}`}>{label}</span>
    </button>
  );
}
