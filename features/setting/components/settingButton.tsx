"use client";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { Button } from "@/components/button";
import IconElement from "@/components/icon/iconElement";

interface SettingButtonPrpos {
  text: string;
  onClieck?: () => void;
}

const SettingButton = ({ text, onClieck }: SettingButtonPrpos) => {
  return (
    <Button variant="tertiary" align="between" isIcon onClick={onClieck}>
      {text}
      <IconElement icon={faChevronRight} className="h-3 w-3" />
    </Button>
  );
};

export default SettingButton;
