import { Button } from "@/components/button";
import ButttonContain from "@/components/button/butttonContain";
import ScreenContainer from "@/components/container/screenContainer";
import BaseInput from "@/components/input/baseInput";
import CircleTitle from "@/components/title/circleTitle";
import Title from "@/components/title/title";

const AddInfoScreen = () => {
  return (
    <ScreenContainer>
      <CircleTitle>
        <Title size="text-xl">정보를 입력해주세요!</Title>
      </CircleTitle>
      <div className="flex w-full flex-col gap-4">
        <BaseInput label="이름" placeholder="이름을 입력해주세요." />
        <BaseInput label="이메일" placeholder="이메일을 입력해주세요." />
      </div>
      <ButttonContain isFixed>
        <Button variant="positive" size="medium">
          습관 만들러 가기
        </Button>
      </ButttonContain>
    </ScreenContainer>
  );
};

export default AddInfoScreen;
