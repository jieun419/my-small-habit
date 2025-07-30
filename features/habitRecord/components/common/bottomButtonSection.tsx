"use client";

import { Button, ButttonContain } from "@/components/button";

interface BottomButtonSectionProps {
  prevText: string;
  nextText: string;
  prevOnClick: () => void;
  nextOnClickk: () => void;
}

const BottomButtonSection = ({
  prevText,
  nextText,
  prevOnClick,
  nextOnClickk,
}: BottomButtonSectionProps) => {
  return (
    <ButttonContain isFixed>
      <Button variant="tertiary" size="medium" onClick={prevOnClick}>
        {prevText}
      </Button>
      <Button variant="secondary" size="medium" onClick={nextOnClickk}>
        {nextText}
      </Button>
    </ButttonContain>
  );
};

export default BottomButtonSection;
