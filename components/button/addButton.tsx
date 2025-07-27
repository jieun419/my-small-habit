import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Button from "./baseButton";
import IconElement from "../icon/iconElement";

interface AddButtonProps {
  w?: "w-full" | "w-fit";
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
}

const AddButton = ({ w = "w-full", type = "button", className, onClick }: AddButtonProps) => {
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
