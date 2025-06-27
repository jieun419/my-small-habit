import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Button from "./Button";
import IconElement from "../icon/iconElement";

interface AddButtonProps {
  w?: "w-full" | "w-fit";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

const AddButton = ({ w = "w-full", onClick, className, type = "button" }: AddButtonProps) => {
  return (
    <Button
      variant="tertiary"
      size="small"
      isIcon
      onClick={onClick}
      type={type}
      className={`${w} ${className}`}>
      <IconElement icon={faPlus} className="w-3 text-gray-900" />
    </Button>
  );
};

export default AddButton;
