import ScreenContainer from "@/components/container/screenContainer";
import CircleTitle from "@/components/title/circleTitle";
import SubTitle from "@/components/title/subTitle";
import Title from "@/components/title/title";
import { HabitMood } from "@/types/habit";

import BottomButtonSection from "./components/common/bottomButtonSection";
import RecordMood from "./components/step2/recordMood";
import RecordRetrospectSection from "./components/step2/recordRetrospectSection";

import { HabitRecord } from ".";

interface RecordStep2Props {
  habitRecord: HabitRecord;
  uploadHabitRecord: () => void;
  upDateHabitRecord: (habitRecord: Partial<HabitRecord>) => void;
  handleChangeStep: (step: "step1" | "step2") => void;
}

const RecordStep2 = ({
  habitRecord,
  uploadHabitRecord,
  upDateHabitRecord,
  handleChangeStep,
}: RecordStep2Props) => {
  return (
    <ScreenContainer isBottomButton>
      <CircleTitle>
        <Title color="text-gray-900" size="text-xl">
          그날을 기록하세요
        </Title>
      </CircleTitle>

      <article className="flex w-full flex-col gap-[50px]">
        <section className="flex w-full flex-col items-center gap-4">
          <SubTitle color="text-gray-900" size="text-lg">
            기분은 어떠셨나요?
          </SubTitle>
          <RecordMood
            currentMood={habitRecord.mood as HabitMood}
            upDateHabitRecord={upDateHabitRecord}
          />
        </section>

        <section className="flex w-full flex-col items-center gap-4">
          <SubTitle color="text-gray-900" size="text-lg">
            실천하면서 무엇을 느꼈나요?
          </SubTitle>
          <RecordRetrospectSection
            habitRecord={habitRecord}
            upDateHabitRecord={upDateHabitRecord}
            retrospectFiles={habitRecord.retrospectFiles ?? []}
            retrospectText={habitRecord.retrospectText ?? ""}
          />
        </section>
      </article>

      <BottomButtonSection
        prevText="이전으로"
        nextText="기록 완료!"
        prevOnClick={() => handleChangeStep("step1")}
        nextOnClickk={uploadHabitRecord}
      />
    </ScreenContainer>
  );
};

export default RecordStep2;
