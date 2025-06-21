interface IconMood5VeryHappyProps {
  className?: string;
}

const IconMood5VeryHappy = ({ className }: IconMood5VeryHappyProps) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <circle cx="24" cy="24" r="24" fill="#FFA1BF" />
      <ellipse cx="18" cy="21.5" rx="4" ry="6.5" fill="white" />
      <ellipse cx="30" cy="21.5" rx="4" ry="6.5" fill="white" />
      <ellipse cx="19.5" cy="20.5" rx="2.5" ry="4.5" fill="#333333" />
      <ellipse cx="31.5" cy="20.5" rx="2.5" ry="4.5" fill="#333333" />
      <path
        d="M18.5 32.5C20.1667 33.5 24.5 34.9 28.5 32.5C26.8333 36.5 22.5 42.1 18.5 32.5Z"
        fill="#333333"
        stroke="#333333"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconMood5VeryHappy;
