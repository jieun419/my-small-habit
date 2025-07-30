interface DateResetButtonProps {
  onClick: () => void;
}

const DateResetButton = ({ onClick }: DateResetButtonProps) => {
  return (
    <button className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400" onClick={onClick}>
      <span className="text-xs text-gray-400">초기화</span>
    </button>
  );
};

export default DateResetButton;
