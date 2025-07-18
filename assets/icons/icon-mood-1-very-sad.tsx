interface IconMood1VerySadProps {
  className?: string;
  size?: string;
}

const IconMood1VerySad = ({ className, size = "48" }: IconMood1VerySadProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <circle cx="24" cy="24" r="24" fill="#B7CAFF" />
      <ellipse cx="18" cy="21.5" rx="4" ry="6.5" fill="white" />
      <mask
        id="mask0_18_135"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="15"
        y="21"
        width="5"
        height="9">
        <ellipse cx="17.5" cy="25.5" rx="2.5" ry="4.5" fill="#333333" />
      </mask>
      <g mask="url(#mask0_18_135)">
        <ellipse cx="18" cy="21.5" rx="4" ry="6.5" fill="#333333" />
      </g>
      <ellipse cx="30" cy="21.5" rx="4" ry="6.5" fill="white" />
      <mask
        id="mask1_18_135"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="27"
        y="21"
        width="5"
        height="9">
        <ellipse cx="29.5" cy="25.5" rx="2.5" ry="4.5" fill="#333333" />
      </mask>
      <g mask="url(#mask1_18_135)">
        <ellipse cx="30" cy="21.5" rx="4" ry="6.5" fill="#333333" />
      </g>
      <path
        d="M22.7773 31.4065C23.7804 31.1243 24.8844 31.19 26.0254 31.7903C27.1532 32.3837 28.2919 33.4855 29.4199 35.2288L28.5801 35.7717C27.5082 34.1151 26.4848 33.1618 25.5596 32.675C24.6475 32.1952 23.8073 32.1548 23.0479 32.3684C21.482 32.8089 20.1679 34.3614 19.4414 35.7336L19 35.5002L18.5586 35.2659C19.3322 33.8048 20.8184 31.9576 22.7773 31.4065Z"
        fill="#333333"
      />
    </svg>
  );
};

export default IconMood1VerySad;
