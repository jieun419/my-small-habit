"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/button";
import ButttonContain from "@/components/button/butttonContain";
import ScreenContainer from "@/components/container/screenContainer";
import CircleTitle from "@/components/title/circleTitle";
import Title from "@/components/title/title";
import { routes } from "@/constants/path";
import { useDeleteHabit, useGetHabitList, useInsertHabit, useUpdateHabit } from "@/hooks/api/habit";

import HobitBox from "./hobitBox";
import HabitCreateForm from "./hobitCreateForm";

interface HabitAddScreenProps {
  userId?: string;
}

const HabitAddScreen = ({ userId }: HabitAddScreenProps) => {
  const router = useRouter();

  const [createHabit, setCreateHabit] = useState("");
  const [editHabits, setEditHabits] = useState<{ [id: string]: string }>({});
  const [seletcHabitId, setSeletcHabitId] = useState("");

  const [isEdit, setIsEdit] = useState(false);

  const { data: habitList = [] } = useGetHabitList(userId || "");

  const { mutateInsertHabit } = useInsertHabit();
  const { mutateUpdateHabit } = useUpdateHabit();
  const { mutateDeleteHabit } = useDeleteHabit();

  // onChange event
  const handleEditInputChange = (id: string, value: string) => {
    setEditHabits((prev) => ({ ...prev, [id]: value }));
  };

  // create habit
  const handleCreateHabit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!habitList) return;

    try {
      mutateInsertHabit({ name: createHabit, user_id: userId });
      setCreateHabit("");
    } catch (error) {
      console.error(error);
    }
  };

  // delete habit
  const handleDeleteHabit = (id: string) => {
    mutateDeleteHabit({ id });
  };

  // edit habit
  const handleEditHabit = (id: string) => {
    const currentHabit = habitList?.find((habit) => habit.id === id);
    const editValue = editHabits[id] ?? currentHabit?.name;

    if (currentHabit?.name === editValue) {
      setEditHabits((prev) => ({ ...prev, [id]: "" }));
      setIsEdit(false);
      setSeletcHabitId("");
      return;
    }

    try {
      mutateUpdateHabit({ name: editValue, id });

      setTimeout(() => {
        setEditHabits((prev) => ({ ...prev, [id]: "" }));
        setIsEdit(false);
        setSeletcHabitId("");
      }, 300);
    } catch (error) {
      console.error(error);
    }
  };

  // habit editor toggle
  const handleEditToggle = (id: string) => {
    const currentHabit = habitList?.find((habit) => habit.id === id);

    if (isEdit && currentHabit?.id === id) {
      handleEditHabit(id);
    } else {
      setIsEdit(true);
      setSeletcHabitId(id);
      setEditHabits((prev) => ({ ...prev, [id]: currentHabit?.name || "" }));
    }
  };

  return (
    <ScreenContainer isBottomButton>
      <CircleTitle>
        <Title size="text-xl">작은 습관을 만들어 봐요!</Title>
      </CircleTitle>
      <HabitCreateForm
        handleCreateHabit={handleCreateHabit}
        createHabit={createHabit}
        setCreateHabit={setCreateHabit}
      />

      <div className="flex w-full flex-col gap-2 overflow-y-auto">
        {habitList?.map((habit) => (
          <HobitBox
            key={habit.id}
            habit={habit}
            isEdit={isEdit}
            seletcHabitId={seletcHabitId}
            editValue={editHabits[habit.id] ?? habit.name}
            handleEditInputChange={handleEditInputChange}
            handleEditToggle={handleEditToggle}
            handleDeleteHabit={handleDeleteHabit}
          />
        ))}
      </div>

      <ButttonContain isFixed>
        <Button variant="secondary" onClick={() => router.replace(routes.userPath.record.step1)}>
          오늘 습관 기록하기
        </Button>
      </ButttonContain>
    </ScreenContainer>
  );
};

export default HabitAddScreen;
