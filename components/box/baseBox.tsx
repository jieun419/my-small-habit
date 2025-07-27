import React from "react";

interface BaseBoxProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary" | "positive" | "negative" | "white" | "normal";
  size?: "small" | "medium" | "large";
  align?: "left" | "center" | "right" | "between";
  w?: "w-full" | "w-fit";
  isIcon?: boolean;
  className?: string;
}

const BaseBox: React.FC<BaseBoxProps> = ({
  children,
  variant = "primary",
  size = "medium",
  align = "center",
  w = "w-full",
  isIcon,
  className,
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
      case "white":
        return "button-white";
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
        return "!justify-start";
      case "center":
        return "!justify-center";
      case "right":
        return "!justify-end";
      case "between":
        return "!justify-between";
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
        return "w-full";
    }
  };

  const getIconClass = () => {
    if (isIcon) {
      return "flex items-center justify-center gap-4";
    }
    return "";
  };

  const baseClasses = getVariantClass();
  const sizeClasses = getSizeClass();
  const wClasses = getWClass();
  const alignClasses = getAlignClass();
  const iconClasses = getIconClass();

  const combinedClasses = [baseClasses, sizeClasses, wClasses, iconClasses, alignClasses, className]
    .filter(Boolean)
    .join(" ");

  return <div className={combinedClasses}>{children}</div>;
};

export default BaseBox;
