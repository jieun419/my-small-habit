import { AddButton } from "@/components/button";
import BaseInput from "@/components/input/baseInput";

interface HabitCreateFormProps {
  createHabit: string;
  handleCreateHabit: (e: React.FormEvent<HTMLFormElement>) => void;
  setCreateHabit: (value: string) => void;
}

const HabitCreateForm = ({
  createHabit,
  handleCreateHabit,
  setCreateHabit,
}: HabitCreateFormProps) => {
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

export default HabitCreateForm;
