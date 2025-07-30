"use client";

import { useState } from "react";

import { useGetHabitList, useUpdateHabit, useDeleteHabit } from "@/hooks/api/habit";

import HabitBox from "./habitBox";

interface HabitListPrpos {
  userId?: string;
}

const HabitListSection = ({ userId }: HabitListPrpos) => {
  const [editHabits, setEditHabits] = useState<{ [id: string]: string }>({});
  const [seletcHabitId, setSeletcHabitId] = useState("");

  const [isEdit, setIsEdit] = useState(false);

  const { data: habitList = [] } = useGetHabitList(userId || "");

  const { mutateUpdateHabit } = useUpdateHabit();
  const { mutateDeleteHabit } = useDeleteHabit();

  // onChange event
  const handleEditInputChange = (id: string, value: string) => {
    setEditHabits((prev) => ({ ...prev, [id]: value }));
  };

  // delete habit
  const handleDeleteHabit = (id: string) => {
    mutateDeleteHabit({ id });
  };

  // edit habit
  const handleEditHabit = (id: string) => {
    const currentHabit = habitList?.find((habit) => habit.id === id);
    const editValue = editHabits[id] ?? currentHabit?.name;

    const resethabitData = () => {
      setEditHabits((prev) => ({ ...prev, [id]: "" }));
      setIsEdit(false);
      setSeletcHabitId("");
    };

    if (currentHabit?.name === editValue) return resethabitData();

    mutateUpdateHabit(
      { name: editValue, id },
      {
        onSuccess: () => {
          resethabitData();
        },
      },
    );
  };

  // habit editor toggle
  const handleEditToggle = (id: string) => {
    const currentHabit = habitList?.find((habit) => habit.id === id);

    if (isEdit && currentHabit?.id === id) {
      if (editHabits[id] === currentHabit?.name) return setIsEdit(false);
      handleEditHabit(id);
    } else {
      setIsEdit(true);
      setSeletcHabitId(id);
      setEditHabits((prev) => ({ ...prev, [id]: currentHabit?.name || "" }));
    }
  };

  return (
    <div className="flex w-full flex-col gap-2 overflow-y-auto">
      {habitList?.map((habit) => (
        <HabitBox
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
  );
};

export default HabitListSection;
