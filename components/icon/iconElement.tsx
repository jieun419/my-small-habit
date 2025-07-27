import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IconElementProps {
  icon: IconProp;
  className?: string;
}

const IconElement = ({ icon, className }: IconElementProps) => {
  return <FontAwesomeIcon icon={icon} className={className} />;
};

export default IconElement;
