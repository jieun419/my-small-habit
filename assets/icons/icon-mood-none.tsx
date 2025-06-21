interface IconMoodNoneProps {
  className?: string;
}

const IconMoodNone = ({ className }: IconMoodNoneProps) => {
  return (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="10.5001"
        cy="10.5"
        r="9.5"
        fill="#F5F5F5"
        stroke="#999999"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeDasharray="1 3"
        className={className}
      />
    </svg>
  );
};

export default IconMoodNone;
