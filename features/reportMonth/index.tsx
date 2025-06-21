import { Button } from "@/components/button";
import ButttonContain from "@/components/button/butttonContain";
import ScreenContainer from "@/components/container/screenContainer";
import CircleTitle from "@/components/title/circleTitle";
import Title from "@/components/title/title";

const ReportMonthScreen = () => {
  return (
    <ScreenContainer>
      <article className="flex w-full flex-col gap-4">
        <section>달력</section>
        <section className="w-full">
          <CircleTitle>
            <Title>6월 리포트예요!</Title>
          </CircleTitle>
          <div className="h-[200px] w-full rounded-md bg-white shadow-md">chart</div>
        </section>
        <section className="w-full">
          <div className="text-left">
            <Title>6월 리포트예요!</Title>
            <div>내용</div>
          </div>
        </section>

        <section className="w-full">
          <div className="text-left">
            <Title>0월에 이런걸 해보는건 어떠세요?</Title>
            <div>내용</div>
          </div>
        </section>
      </article>

      <ButttonContain isColumn>
        <Button variant="secondary" size="medium">
          메일로 리포트 받기
        </Button>
        <Button variant="tertiary" size="medium">
          사진으로 저장
        </Button>
      </ButttonContain>
    </ScreenContainer>
  );
};

export default ReportMonthScreen;
