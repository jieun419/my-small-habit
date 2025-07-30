import { useEffect, useState } from "react";

import { Button } from "@/components/button";
import { Habit } from "@/types/habit";

import { HabitRecord } from "../..";

interface HabitListSectionProps {
  habitList: Habit[];
  habitRecord: HabitRecord;
  handleIsNotDoneHabit: (habitId: string) => void;
  handleIsDoneHabit: (habitId: string) => void;
}

const HabitListSection = ({
  habitList,
  habitRecord,
  handleIsNotDoneHabit,
  handleIsDoneHabit,
}: HabitListSectionProps) => {
  const [colorMap, setColorMap] = useState<string[]>([]);
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
  );
};

export default HabitListSection;
