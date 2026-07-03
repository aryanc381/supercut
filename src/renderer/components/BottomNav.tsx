import { DisplayIcon, WindowIcon, AreaIcon, PersonIcon } from "./icons";

type Mode = "display" | "window" | "area" | "camera";

const modes: { key: Mode; icon: typeof DisplayIcon }[] = [
  { key: "display", icon: DisplayIcon },
  { key: "window", icon: WindowIcon },
  { key: "area", icon: AreaIcon },
  { key: "camera", icon: PersonIcon },
];

interface BottomNavProps {
  active: Mode;
  onChange: (mode: Mode) => void;
}

export default function BottomNav({ active, onChange }: BottomNavProps) {
  return (
    <div className="flex items-center justify-around flex-shrink-0">
      {modes.map(({ key, icon: Icon }) => {
        const isActive = active === key;
        return (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={`p-[6px] rounded-lg border-2 transition-all duration-150 cursor-pointer bg-transparent ${
              isActive ? "border-white text-white" : "border-transparent text-[#888] opacity-70 hover:opacity-100"
            }`}
          >
            <Icon />
          </button>
        );
      })}
    </div>
  );
}
