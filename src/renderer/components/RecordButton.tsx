interface RecordButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export default function RecordButton({
  onClick,
  disabled,
}: RecordButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: "100%",
        padding: "0.8vw 0",
        borderRadius: "0.1vw",
        border: "none",
        background: "#e53935",
        color: "#fff",
        fontSize: "1vw",
        fontFamily: "Inter Tight, sans-serif",
        fontWeight: 600,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.4 : 1,
        transition: "opacity 0.15s",
      }}
    >
      {"\u25CF"} Start Recording
    </button>
  );
}
