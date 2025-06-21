import { Button } from "@/components/button";
import AddButton from "@/components/button/addButton";
import ButttonContain from "@/components/button/butttonContain";
import ScreenContainer from "@/components/container/screenContainer";
import BaseInput from "@/components/input/baseInput";
import CircleTitle from "@/components/title/circleTitle";
import Title from "@/components/title/title";

const RecordStep1Screen = () => {
  return (
    <ScreenContainer>
      <CircleTitle>
        <Title color="text-gray-900" size="text-xl">
          오늘 어떤 습관을 하셨나요?
        </Title>
      </CircleTitle>
      <section className="flex w-full flex-col gap-4">
        <div className="flex w-full justify-between gap-4">
          <span className="text-sm text-gray-400">2025.06.18 수요일</span>
          <span className="text-sm text-gray-400">흐림</span>
        </div>
        <div className="flex w-full flex-col gap-2">
          <Button
            variant="normal"
            className="bg-yellow-50 text-gray-900"
            align="left"
            size="medium">
            30분 독서하기
          </Button>
          <Button variant="normal" className="bg-green-50 text-gray-900" align="left" size="medium">
            30분 독서하기
          </Button>
          <Button variant="normal" className="bg-gray-50 text-gray-900" align="left" size="medium">
            30분 독서하기
          </Button>

          <AddButton />
        </div>
      </section>

      <ButttonContain isFixed>
        <Button variant="negative" size="medium">
          나중에
        </Button>
        <Button variant="positive" size="medium">
          다음
        </Button>
      </ButttonContain>
    </ScreenContainer>
  );
};

export default RecordStep1Screen;
