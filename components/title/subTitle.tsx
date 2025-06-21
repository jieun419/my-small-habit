import React from "react";

interface SubTitleProps {
  color?: "text-white" | "text-primary" | "text-secondary" | "text-gray-500" | "text-gray-900";
  size?: "text-base" | "text-lg" | "text-xl" | "text-2xl";
  children: React.ReactNode;
}

const SubTitle = ({ children, color = "text-gray-900", size = "text-lg" }: SubTitleProps) => {
  return <span className={`${size} ${color} font-normal`}>{children}</span>;
};

export default SubTitle;
