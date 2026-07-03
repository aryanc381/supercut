type Mode = "display" | "window" | "area" | "camera";

interface RecordButtonProps {
  mode: Mode;
  onClick: () => void;
}

const labels: Record<Mode, string> = { display: "Display", window: "Window", area: "Area", camera: "Camera" };

export default function RecordButton({ mode, onClick }: RecordButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full h-[76px] flex items-center justify-center gap-3 rounded-[20px] bg-[#FF0050] hover:bg-[#FF1E63] active:bg-[#E50048] border-none cursor-pointer transition-colors duration-150 flex-shrink-0"
    >
      <div className="w-[14px] h-[14px] rounded-full bg-white" />
      <span className="text-white text-[30px] font-bold">Record {labels[mode]}</span>
    </button>
  );
}
