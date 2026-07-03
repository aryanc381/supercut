interface RecordButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export default function RecordButton({ onClick, disabled }: RecordButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full py-2 rounded-sm border-none bg-[#e53935] text-white text-sm font-semibold cursor-pointer transition-opacity duration-150 disabled:opacity-40 disabled:cursor-not-allowed"
    >
      {"\u25CF"} Start Recording
    </button>
  );
}
