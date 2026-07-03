import { MonitorIcon } from "./icons";

export default function CameraPreview() {
  return (
    <div className="w-full h-[260px] relative overflow-hidden rounded-[22px] bg-[#1a1a1a] flex-shrink-0">
      <div className="absolute bottom-[18px] right-[18px] flex items-center gap-[6px] px-[10px] py-[6px] rounded-lg bg-black/35 text-white text-lg font-semibold">
        <MonitorIcon />
        <span>4K</span>
      </div>
    </div>
  );
}
