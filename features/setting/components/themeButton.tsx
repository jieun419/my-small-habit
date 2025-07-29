"use client";

import { Button } from "@/components/button";

interface ThemeButtonPrpos {
  text: string;
  isActive: boolean;
  onClieck?: () => void;
}

const ThemeButton = ({ text, isActive, onClieck }: ThemeButtonPrpos) => {
  return (
    <Button
      variant={isActive ? "secondary" : "tertiary"}
      size="small"
      className="whitespace-nowrap"
      onClick={onClieck}>
      {text}
    </Button>
  );
};

export default ThemeButton;
