interface ToggleProps {
  label: string;
  enabled: boolean;
  onToggle: () => void;
}

export default function Toggle({ label, enabled, onToggle }: ToggleProps) {
  return (
    <div className="flex items-center justify-between py-1.5">
      <span className="text-xs text-[#aaa]">{label}</span>
      <button
        onClick={onToggle}
        className={`relative w-9 h-5 rounded-full border-none cursor-pointer transition-colors duration-150 ${
          enabled ? "bg-[#555]" : "bg-[#222]"
        }`}
      >
        <div
          className={`absolute top-0.5 w-3.5 h-3.5 rounded-full bg-white transition-all duration-150 ${
            enabled ? "left-[18px]" : "left-0.5"
          }`}
        />
      </button>
    </div>
  );
}
