import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

import BaseBox from "@/components/box/baseBox";
import IconElement from "@/components/icon/iconElement";

interface HabitBoxProps {
  habit: { id: string; name: string };
  isEdit: boolean;
  seletcHabitId: string;
  editValue: string;
  handleEditInputChange: (id: string, value: string) => void;
  handleEditToggle: (id: string) => void;
  handleDeleteHabit: (id: string) => void;
}

const HabitBox = ({
  habit,
  isEdit,
  seletcHabitId,
  editValue,
  handleEditInputChange,
  handleEditToggle,
  handleDeleteHabit,
}: HabitBoxProps) => {
  const isEditWithSelected = isEdit && seletcHabitId === habit.id;

  const buttonItems = [
    {
      type: "edit",
      icon: faPencil,
      onClick: (habitId: string) => handleEditToggle(habitId),
    },
    {
      type: "delete",
      icon: faTrash,
      onClick: (habitId: string) => handleDeleteHabit(habitId),
    },
  ];

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
        maxLength={30}
      />
      <div className="flex items-center gap-1">
        {buttonItems.map((item) => (
          <button
            key={item.type}
            className="aspect-square cursor-pointer px-2"
            onClick={() => item.onClick(habit.id)}>
            <IconElement icon={item.icon} className="w-3 text-gray-600" />
          </button>
        ))}
      </div>
    </BaseBox>
  );
};

export default HabitBox;
