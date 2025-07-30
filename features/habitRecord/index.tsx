"use client";

import { useState } from "react";

import { useUploadHabitRecord } from "@/hooks/api/habit";
import { Habit, HabitMood } from "@/types/habit";
import { toast } from "@/utils/toast";

import RecordStep1 from "./recordStep1";
import RecordStep2 from "./recordStep2";

interface HabitRecordScreenProps {
  userId?: string;
  uploadDate: string;
}

export interface HabitRecord {
  habits: Habit[];
  mood: HabitMood | null;
  retrospectFiles?: string[];
  retrospectText?: string;
}

const HabitRecordScreen = ({ userId, uploadDate }: HabitRecordScreenProps) => {
  const { mutateUploadHabitRecord } = useUploadHabitRecord();

  const [step, setStep] = useState<"step1" | "step2">("step1");

  const [habitRecord, setHabitRecord] = useState<HabitRecord>({
    habits: [],
    mood: null,
    retrospectFiles: [],
    retrospectText: "",
  });

  const handleChangeStep = (step: "step1" | "step2") => {
    setStep(step);
  };

  const upDateHabitRecord = (record: Partial<HabitRecord>) => {
    setHabitRecord((prevRecord) => ({ ...prevRecord, ...record }));
  };

  const uploadHabitRecord = () => {
    if (!userId) return;

    if (!habitRecord.mood) return toast("기분을 선택해 주세요.");
    if (!habitRecord.retrospectText) return toast("회고를 작성해 주세요.");

    // 습관 기록
    mutateUploadHabitRecord({
      record: {
        done_habits: habitRecord.habits,
        mood: habitRecord.mood,
        retrospect_text: habitRecord.retrospectText ?? "",
        retrospect_image_url: habitRecord.retrospectFiles ?? null,
        is_done: true,
        upload_date: uploadDate as string,
      },
      userId,
    });
  };

  return (
    <>
      {step === "step1" && (
        <RecordStep1
          userId={userId}
          habitRecord={habitRecord}
          upDateHabitRecord={upDateHabitRecord}
          handleChangeStep={handleChangeStep}
        />
      )}
      {step === "step2" && (
        <RecordStep2
          habitRecord={habitRecord}
          upDateHabitRecord={upDateHabitRecord}
          uploadHabitRecord={uploadHabitRecord}
          handleChangeStep={handleChangeStep}
        />
      )}
    </>
  );
};

export default HabitRecordScreen;
