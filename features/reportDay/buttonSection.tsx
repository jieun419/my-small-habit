import { ButttonContain, Button } from "@/components/button";
import { routes } from "@/constants/path";
import usePageMove from "@/hooks/usePageMove";

const ButtonSection = () => {
  const { handlePageMove } = usePageMove();
  return (
    <ButttonContain isColumn>
      <Button
        variant="secondary"
        size="medium"
        onClick={() => handlePageMove({ path: routes.userPath.mypage.root, type: "replace" })}>
        확인
      </Button>
      <Button variant="tertiary" size="medium">
        사진으로 저장
      </Button>
    </ButttonContain>
  );
};

export default ButtonSection;
