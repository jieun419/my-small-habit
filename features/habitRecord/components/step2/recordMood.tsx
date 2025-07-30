import { faCheck } from "@fortawesome/free-solid-svg-icons";

import {
  IconMood1VerySad,
  IconMood2SlightlySad,
  IconMood3Neutral,
  IconMood4SlightlyHappy,
  IconMood5VeryHappy,
} from "@/assets/icons";
import IconElement from "@/components/icon/iconElement";
import { HabitMood } from "@/types/habit";

import { HabitRecord } from "../..";

interface RecordMoodProps {
  currentMood: HabitMood;
  upDateHabitRecord: (habitRecord: Partial<HabitRecord>) => void;
}

const RecordMood = ({ currentMood, upDateHabitRecord }: RecordMoodProps) => {
  const moodItems = [
    {
      id: 1,
      name: "verySad",
      icon: <IconMood1VerySad />,
    },
    {
      id: 2,
      name: "slightlySad",
      icon: <IconMood2SlightlySad />,
    },
    {
      id: 3,
      name: "neutral",
      icon: <IconMood3Neutral />,
    },
    {
      id: 4,
      name: "slightlyHappy",
      icon: <IconMood4SlightlyHappy />,
    },
    {
      id: 5,
      name: "veryHappy",
      icon: <IconMood5VeryHappy />,
    },
  ];

  return (
    <div className="flex w-full max-w-1/2 items-center justify-center gap-5">
      {moodItems.map((item) => (
        <div
          key={item.name}
          className="flex flex-col items-center gap-2"
          onClick={() => upDateHabitRecord({ mood: item.name as HabitMood })}>
          <div
            data-checked={currentMood === item.name}
            className="group flex cursor-pointer flex-col items-center gap-2 rounded-full">
            {item.icon}
            <div className="group-data-[checked=true]:bg-primary flex aspect-square h-[15px] w-[15px] items-center justify-center rounded-full bg-gray-100">
              <IconElement
                icon={faCheck}
                className="w-1/2 text-gray-500 group-data-[checked=true]:text-white"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecordMood;
