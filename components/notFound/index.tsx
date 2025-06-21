import { IconNotFound } from "@/assets/icons";

import { Button } from "../button";
import SubTitle from "../title/subTitle";

const NotFound = ({
  title,
  buttonText,
  onClick,
}: {
  title: string;
  buttonText?: string;
  onClick?: () => void;
}) => {
  return (
    <div className="my-lg flex flex-col items-center gap-[40px]">
      <IconNotFound className="h-[140px] w-[140px]" />

      <div className="gap-sm flex flex-col items-center">
        <SubTitle color="text-gray-900" size="text-lg">
          {title}
        </SubTitle>
        {buttonText && (
          <Button onClick={onClick} size="small" variant="secondary" w="w-fit">
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default NotFound;
