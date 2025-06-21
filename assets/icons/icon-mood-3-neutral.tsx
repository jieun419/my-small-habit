interface IconMood3NeutralProps {
  className?: string;
}

const IconMood3Neutral = ({ className }: IconMood3NeutralProps) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <circle cx="24" cy="24" r="24" fill="#F9CE9C" />
      <ellipse cx="18" cy="21.5" rx="4" ry="6.5" fill="white" />
      <ellipse cx="30" cy="21.5" rx="4" ry="6.5" fill="white" />
      <ellipse cx="18.5" cy="22.5" rx="2.5" ry="4.5" fill="#333333" />
      <ellipse cx="30.5" cy="22.5" rx="2.5" ry="4.5" fill="#333333" />
      <path d="M29.5 34.5V35.5H18.5V34.5H29.5Z" fill="#333333" />
    </svg>
  );
};

export default IconMood3Neutral;
