import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconElement = ({ icon, className }: { icon: IconProp; className?: string }) => {
  return <FontAwesomeIcon icon={icon} className={className} />;
};

export default IconElement;
