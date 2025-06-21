import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Button from "./Button";
import IconElement from "../icon/iconElement";

interface AddButtonProps {
  w?: "w-full" | "w-fit";
  onClick?: () => void;
  className?: string;
}

const AddButton = ({ w = "w-full", onClick, className }: AddButtonProps) => {
  return (
    <Button
      variant="tertiary"
      size="small"
      isIcon
      onClick={onClick}
      className={`${w} ${className}`}>
      <IconElement icon={faPlus} className="w-3 text-gray-900" />
    </Button>
  );
};

export default AddButton;
