import { CameraIcon, MicIcon, ChevronDown } from "./icons";

interface DeviceSelectorProps {
  type: "camera" | "microphone";
  label: string;
}

export default function DeviceSelector({ type, label }: DeviceSelectorProps) {
  return (
    <div className="h-[44px] flex items-center justify-between cursor-pointer group text-[#D2D2D2]">
      <div className="flex items-center gap-3">
        {type === "camera" ? <CameraIcon /> : <MicIcon />}
        <span className="text-base font-medium text-[#D7D7D7]">{label}</span>
      </div>
      <ChevronDown />
    </div>
  );
}
