import ButttonContain from "@/components/button/butttonContain";
import ScreenContainer from "@/components/container/screenContainer";
import ActionLinkMsg from "@/components/text/actionLinkMsg";
import CircleTitle from "@/components/title/circleTitle";
import Title from "@/components/title/title";
import { routes } from "@/constants/path";

import SignForm from "./components/signForm";

const SignUpScreen = () => {
  return (
    <ScreenContainer>
      <CircleTitle>
        <Title size="text-xl">정보를 입력해주세요!</Title>
      </CircleTitle>

      <SignForm />

      <ButttonContain isFixed isColumn>
        <ActionLinkMsg
          href={routes.commonPath.login}
          msg="계정이 있으신가요?"
          linkMsg="로그인 하러가기"
        />
      </ButttonContain>
    </ScreenContainer>
  );
};

export default SignUpScreen;
