import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

import BaseBox from "@/components/box/baseBox";
import IconElement from "@/components/icon/iconElement";

interface HobitBoxProps {
  habit: { id: string; name: string };
  isEdit: boolean;
  seletcHabitId: string;
  editValue: string;
  handleEditInputChange: (id: string, value: string) => void;
  handleEditToggle: (id: string) => void;
  handleDeleteHabit: (id: string) => void;
}

const HobitBox = ({
  habit,
  isEdit,
  seletcHabitId,
  editValue,
  handleEditInputChange,
  handleEditToggle,
  handleDeleteHabit,
}: HobitBoxProps) => {
  const isEditWithSelected = isEdit && seletcHabitId === habit.id;

  return (
    <BaseBox
      variant="normal"
      align="between"
      size="medium"
      className="bg-yellow-50 text-gray-900"
      isIcon>
      <input
        type="text"
        value={isEditWithSelected ? editValue : habit.name}
        onChange={(e) => handleEditInputChange(habit.id, e.target.value)}
        className="roundded-none w-full border-b border-gray-900 bg-transparent text-gray-900 disabled:border-none"
        disabled={!isEditWithSelected}
        onBlur={() => {
          if (isEditWithSelected) handleEditToggle(habit.id);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && isEditWithSelected) {
            handleEditToggle(habit.id);
          }
        }}
        maxLength={30}
      />
      <div className="flex items-center gap-1">
        <button
          className="aspect-square cursor-pointer px-2"
          onClick={() => handleEditToggle(habit.id)}>
          <IconElement icon={faPencil} className="w-3 text-gray-600" />
        </button>
        <button
          className="aspect-square cursor-pointer rounded-full px-2"
          onClick={() => handleDeleteHabit(habit.id)}>
          <IconElement icon={faTrash} className="w-3 text-gray-900" />
        </button>
      </div>
    </BaseBox>
  );
};

export default HobitBox;
