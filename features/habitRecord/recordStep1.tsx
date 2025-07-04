"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/button";
import ButttonContain from "@/components/button/butttonContain";
import ScreenContainer from "@/components/container/screenContainer";
import CircleTitle from "@/components/title/circleTitle";
import Title from "@/components/title/title";
import { routes } from "@/constants/path";
import { useGetHabitList } from "@/hooks/api/habit";
import usePageMove from "@/hooks/usePageMove";
import { Habit } from "@/types/habit";
import { toast } from "@/utils/toast";

import CurrentDateWithWeather from "./components/step1/currentDateWithWeather";

import { HabitRecord } from ".";

interface RecordStep1Props {
  userId?: string;
  habitRecord: HabitRecord;
  upDateHabitRecord: (HabitRecord: Partial<HabitRecord>) => void;
}

const RecordStep1 = ({ userId, habitRecord, upDateHabitRecord }: RecordStep1Props) => {
  const [colorMap, setColorMap] = useState<string[]>([]);

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

    handlePageMove({ path: routes.userPath.habit.record.root("2") });
  };

  useEffect(() => {
    if (habitList && habitList?.length > 0) {
      const habitBgColor = ["bg-yellow-50", "bg-red-50", "bg-green-50", "bg-blue-50"];

      const getRandomColor = () => {
        const randomIndex = Math.floor(Math.random() * habitBgColor.length);
        return habitBgColor[randomIndex];
      };

      const newColors = habitList.map(() => getRandomColor());
      setColorMap(newColors);
    }
  }, [habitList]);

  return (
    <ScreenContainer>
      <CircleTitle>
        <Title color="text-gray-900" size="text-xl">
          오늘 어떤 습관을 하셨나요?
        </Title>
      </CircleTitle>
      <section className="flex w-full flex-col gap-4">
        <CurrentDateWithWeather />
        <div className="flex w-full flex-col gap-2">
          {habitList?.map((habit, idx) => (
            <Button
              key={habit.id}
              variant="normal"
              className={`${habitRecord.habits.find((el) => el.id === habit.id) ? "bg-gray-50 text-gray-400 line-through" : `${colorMap[idx]} text-gray-900`} `}
              align="left"
              size="medium"
              onClick={() =>
                habitRecord.habits.find((el) => el.id === habit.id)
                  ? handleIsNotDoneHabit(habit.id)
                  : handleIsDoneHabit(habit.id)
              }>
              {habit.name}
            </Button>
          ))}
        </div>
      </section>

      <ButttonContain isFixed>
        <Button
          variant="tertiary"
          size="medium"
          onClick={() => handlePageMove({ path: routes.userPath.habit.root, type: "refresh" })}>
          나중에
        </Button>
        <Button variant="secondary" size="medium" onClick={handleGotoStep2}>
          다음
        </Button>
      </ButttonContain>
    </ScreenContainer>
  );
};

export default RecordStep1;
