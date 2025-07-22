interface IconMood2SlightlySadProps {
  className?: string;
  size?: string;
}

const IconMood2SlightlySad = ({ className, size = "48" }: IconMood2SlightlySadProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <circle cx="24" cy="24" r="24" fill="#A0DDE0" />
      <ellipse cx="18" cy="21.5" rx="4" ry="6.5" fill="white" />
      <ellipse cx="30" cy="21.5" rx="4" ry="6.5" fill="white" />
      <mask
        id="mask0_18_136"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="15"
        y="21"
        width="5"
        height="9">
        <ellipse cx="17.5" cy="25.5" rx="2.5" ry="4.5" fill="#333333" />
      </mask>
      <g mask="url(#mask0_18_136)">
        <ellipse cx="18" cy="21.5" rx="4" ry="6.5" fill="#333333" />
      </g>
      <mask
        id="mask1_18_136"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="27"
        y="21"
        width="5"
        height="9">
        <ellipse cx="29.5" cy="25.5" rx="2.5" ry="4.5" fill="#333333" />
      </mask>
      <g mask="url(#mask1_18_136)">
        <ellipse cx="30" cy="21.5" rx="4" ry="6.5" fill="#333333" />
      </g>
      <path d="M29.5 34.5V35.5H18.5V34.5H29.5Z" fill="#333333" />
    </svg>
  );
};

export default IconMood2SlightlySad;
