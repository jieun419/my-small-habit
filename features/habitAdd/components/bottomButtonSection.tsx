"use client";

import { ButttonContain, Button } from "@/components/button";
import { routes } from "@/constants/path";
import usePageMove from "@/hooks/usePageMove";

const BottomButtonSection = () => {
  const { handlePageMove } = usePageMove();
  return (
    <ButttonContain isFixed>
      <Button
        variant="secondary"
        onClick={() =>
          handlePageMove({ path: routes.userPath.habit.record.root(), type: "replace" })
        }>
        오늘 습관 기록하기
      </Button>
    </ButttonContain>
  );
};

export default BottomButtonSection;
