"use client";

import { ButttonContain, Button } from "@/components/button";
import { toast } from "@/utils/toast";

const BottomButtonSection = () => {
  return (
    <ButttonContain>
      <Button variant="secondary" size="medium" onClick={() => toast("서비스 준비 중이에요!")}>
        월간 리포트 보기
      </Button>
    </ButttonContain>
  );
};

export default BottomButtonSection;
