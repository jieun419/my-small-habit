"use client";

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import {
  IconMood1VerySad,
  IconMood2SlightlySad,
  IconMood3Neutral,
  IconMood4SlightlyHappy,
  IconMood5VeryHappy,
} from "@/assets/icons";
import IconElement from "@/components/icon/iconElement";

const RecordMood = () => {
  const [selectMood, setSelectMood] = useState<string | null>(null);

  const moodItems = [
    {
      id: 1,
      name: "mood1",
      icon: <IconMood1VerySad />,
    },
    {
      id: 2,
      name: "mood2",
      icon: <IconMood2SlightlySad />,
    },
    {
      id: 3,
      name: "mood3",
      icon: <IconMood3Neutral />,
    },
    {
      id: 4,
      name: "mood4",
      icon: <IconMood4SlightlyHappy />,
    },
    {
      id: 5,
      name: "mood5",
      icon: <IconMood5VeryHappy />,
    },
  ];

  console.log(selectMood);

  return (
    <div className="flex w-full max-w-1/2 items-center justify-center gap-5">
      {moodItems.map((item) => (
        <div
          key={item.name}
          className="flex flex-col items-center gap-2"
          onClick={() => setSelectMood(item.name)}>
          <div
            data-checked={selectMood === item.name}
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
