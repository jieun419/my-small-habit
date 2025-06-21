import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary" | "positive" | "negative" | "normal";
  size?: "small" | "medium" | "large";
  align?: "left" | "center" | "right";
  w?: "w-full" | "w-fit";
  isIcon?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  align = "center",
  w = "w-full",
  isIcon = false,
  className = "",
  onClick,
  disabled = false,
  type = "button",
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case "primary":
        return "button-primary";
      case "secondary":
        return "button-secondary";
      case "tertiary":
        return "button-tertiary";
      case "positive":
        return "button-positive";
      case "negative":
        return "button-negative";
      case "normal":
        return "button-base";
      default:
        return "button-primary";
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case "small":
        return "button-small";
      case "large":
        return "button-large";
      default:
        return "";
    }
  };

  const getAlignClass = () => {
    switch (align) {
      case "left":
        return "justify-start";
      case "center":
        return "justify-center";
      case "right":
        return "justify-end";
      default:
        return "justify-center";
    }
  };

  const getWClass = () => {
    switch (w) {
      case "w-full":
        return "w-full";
      case "w-fit":
        return "w-fit";
      default:
        return "w-fit";
    }
  };

  const baseClasses = getVariantClass();
  const sizeClasses = getSizeClass();
  const alignClasses = getAlignClass();
  const wClasses = getWClass();

  const combinedClasses = [baseClasses, sizeClasses, alignClasses, wClasses, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={combinedClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
