"use client";

import { useSearchParams } from "next/navigation";
import { useLayoutEffect, useState } from "react";

import { routes } from "@/constants/path";
import { useUploadHabitRecord } from "@/hooks/api/habit";
import usePageMove from "@/hooks/usePageMove";
import { Habit, HabitMood, HabitRecordInsert } from "@/types/habit";
import { toast } from "@/utils/toast";

import RecordStep1 from "./recordStep1";
import RecordStep2 from "./recordStep2";

interface HabitRecordScreenProps {
  userId?: string;
}

export interface HabitRecord {
  habits: Habit[];
  mood: HabitMood | null;
  retrospectFiles?: string[];
  retrospectText?: string;
}

const HabitRecordScreen = ({ userId }: HabitRecordScreenProps) => {
  const prams = useSearchParams();
  const { handlePageMove } = usePageMove();
  const { mutateUploadHabitRecord } = useUploadHabitRecord();
  const currentStep = prams.get("step");

  const [habitRecord, setHabitRecord] = useState<HabitRecord>({
    habits: [],
    mood: null,
    retrospectFiles: [],
    retrospectText: "",
  });

  const upDateHabitRecord = (record: Partial<HabitRecord>) => {
    setHabitRecord((prevRecord) => ({ ...prevRecord, ...record }));
  };

  const uploadHabitRecord = () => {
    if (!userId) return;

    if (!habitRecord.mood) return toast("기분을 선택해 주세요.");
    if (!habitRecord.retrospectText) return toast("회고를 작성해 주세요.");

    mutateUploadHabitRecord({
      record: {
        done_habits: habitRecord.habits,
        mood: habitRecord.mood,
        retrospect_text: habitRecord.retrospectText ?? "",
        retrospect_image_url: habitRecord.retrospectFiles ?? null,
        is_done: true,
      },
      userId,
    });
  };

  useLayoutEffect(() => {
    if (habitRecord.habits.length <= 0) {
      handlePageMove({ path: routes.userPath.habit.record.root("1"), type: "replace" });
    }
  }, []);

  return (
    <>
      {currentStep === "1" && (
        <RecordStep1
          userId={userId}
          habitRecord={habitRecord}
          upDateHabitRecord={upDateHabitRecord}
        />
      )}
      {currentStep === "2" && (
        <RecordStep2
          habitRecord={habitRecord}
          upDateHabitRecord={upDateHabitRecord}
          uploadHabitRecord={uploadHabitRecord}
        />
      )}
    </>
  );
};

export default HabitRecordScreen;
