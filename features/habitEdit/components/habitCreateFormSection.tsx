"use client";

import { useState } from "react";

import { AddButton } from "@/components/button";
import BaseInput from "@/components/input/baseInput";
import { useInsertHabit } from "@/hooks/api/habit";

interface HabitCreateFormSectionProps {
  userId?: string;
}

const HabitCreateFormSection = ({ userId }: HabitCreateFormSectionProps) => {
  const [createHabit, setCreateHabit] = useState("");
  const { mutateInsertHabit } = useInsertHabit();

  const handleCreateHabit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!createHabit) return;

    if (userId) {
      mutateInsertHabit(
        { name: createHabit, user_id: userId },
        {
          onSuccess: () => {
            setCreateHabit("");
          },
        },
      );
    }
  };

  return (
    <form className="mb-4 flex w-full flex-col gap-2" onSubmit={handleCreateHabit}>
      <BaseInput
        label="습관 추가하기"
        placeholder="작은 습관을 입력해주세요."
        value={createHabit}
        onChange={(e) => setCreateHabit(e.target.value)}
      />
      <AddButton type="submit" />
    </form>
  );
};

export default HabitCreateFormSection;
