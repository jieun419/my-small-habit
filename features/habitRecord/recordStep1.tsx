"use client";

import ScreenContainer from "@/components/container/screenContainer";
import CircleTitle from "@/components/title/circleTitle";
import Title from "@/components/title/title";
import { routes } from "@/constants/path";
import { useGetHabitList } from "@/hooks/api/habit";
import usePageMove from "@/hooks/usePageMove";
import { toast } from "@/utils/toast";

import BottomButtonSection from "./components/common/bottomButtonSection";
import CurrentDateWithWeather from "./components/step1/currentDateWithWeather";
import HabitListSection from "./components/step1/habitListSection";

import { HabitRecord } from ".";

interface RecordStep1Props {
  userId?: string;
  habitRecord: HabitRecord;
  upDateHabitRecord: (HabitRecord: Partial<HabitRecord>) => void;
  handleChangeStep: (step: "step1" | "step2") => void;
}

const RecordStep1 = ({
  userId,
  habitRecord,
  upDateHabitRecord,
  handleChangeStep,
}: RecordStep1Props) => {
  const { handlePageMove } = usePageMove();
  const { data: habitList = [] } = useGetHabitList(userId || "");

  const handleIsDoneHabit = (habitId: string) => {
    const currentHabit = habitList?.find((el) => el.id === habitId);
    if (currentHabit) upDateHabitRecord({ habits: [...habitRecord.habits, currentHabit] });
  };

  const handleIsNotDoneHabit = (habitId: string) => {
    const upDateHabits = habitRecord.habits?.filter((el) => el.id !== habitId);
    if (upDateHabits) upDateHabitRecord({ habits: upDateHabits });
  };

  const handleGotoStep2 = () => {
    if (habitRecord.habits.length === 0) return toast("완료 된 습관을 체크해 주세요!");
    handleChangeStep("step2");
  };

  return (
    <ScreenContainer>
      <CircleTitle>
        <Title color="text-gray-900" size="text-xl">
          오늘 어떤 습관을 하셨나요?
        </Title>
      </CircleTitle>

      <section className="flex w-full flex-col gap-4">
        <CurrentDateWithWeather />
        <HabitListSection
          habitList={habitList || []}
          habitRecord={habitRecord}
          handleIsNotDoneHabit={handleIsNotDoneHabit}
          handleIsDoneHabit={handleIsDoneHabit}
        />
      </section>

      <BottomButtonSection
        prevText="나중에"
        nextText="다음"
        prevOnClick={() => handlePageMove({ path: routes.userPath.mypage.root })}
        nextOnClickk={handleGotoStep2}
      />
    </ScreenContainer>
  );
};

export default RecordStep1;
