import { CloseIcon, MoreIcon } from "./icons";

export default function Header() {
  return (
    <div className="flex items-center justify-between h-[48px] drag-region cursor-grab active:cursor-grabbing">
      <button className="w-[36px] h-[36px] flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors duration-150">
        <CloseIcon />
      </button>
      <button className="w-[36px] h-[36px] flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors duration-150">
        <MoreIcon />
      </button>
    </div>
  );
}
