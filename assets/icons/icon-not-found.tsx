interface IconNotFoundProps {
  className?: string;
}

const IconNotFound = ({ className }: IconNotFoundProps) => {
  return (
    <svg
      width="121"
      height="121"
      viewBox="0 0 121 121"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <circle
        cx="60.5"
        cy="60.5"
        r="59.5"
        fill="#FAFAFA"
        stroke="#CCCCCC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="15 15"
      />
      <ellipse cx="45.875" cy="54.4062" rx="9.75" ry="15.8438" fill="white" />
      <ellipse cx="75.125" cy="54.4062" rx="9.75" ry="15.8438" fill="white" />
      <ellipse cx="47.0938" cy="56.8438" rx="6.09375" ry="10.9688" fill="#999999" />
      <ellipse cx="76.3438" cy="56.8438" rx="6.09375" ry="10.9688" fill="#999999" />
      <path d="M73.9062 86.0938V88.5312H47.0938V86.0938H73.9062Z" fill="#999999" />
    </svg>
  );
};

export default IconNotFound;
