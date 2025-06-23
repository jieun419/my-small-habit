import { Button } from "@/components/button";
import AddButton from "@/components/button/addButton";
import ButttonContain from "@/components/button/butttonContain";
import ScreenContainer from "@/components/container/screenContainer";
import BaseInput from "@/components/input/baseInput";
import CircleTitle from "@/components/title/circleTitle";
import Title from "@/components/title/title";

const HabitAddScreen = () => {
  return (
    <ScreenContainer>
      <CircleTitle>
        <Title size="text-xl">작은 습관을 만들어 봐요!</Title>
      </CircleTitle>
      <div className="flex w-full flex-col gap-4">
        <BaseInput label="습관 추가하기" placeholder="작은 습관을 입력해주세요." />
        <AddButton />
      </div>
      <ButttonContain isFixed>
        <Button variant="positive" size="medium">
          습관 기록하기
        </Button>
      </ButttonContain>
    </ScreenContainer>
  );
};

export default HabitAddScreen;
