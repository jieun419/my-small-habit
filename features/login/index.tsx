import ButttonContain from "@/components/button/butttonContain";
import ScreenContainer from "@/components/container/screenContainer";
import ActionLinkMsg from "@/components/text/actionLinkMsg";
import CircleTitle from "@/components/title/circleTitle";
import Title from "@/components/title/title";
import { routes } from "@/constants/path";

import LoginForm from "./components/loginForm";
import SocialLogin from "./components/socialLogin";
import TesterLogin from "./components/testerLogin";

const LoginScreen = () => {
  return (
    <ScreenContainer>
      <CircleTitle>
        <Title size="text-xl">로그인하고 습관을 기록하세요!</Title>
      </CircleTitle>

      <LoginForm />
      <SocialLogin />

      <ButttonContain isFixed isColumn>
        <TesterLogin />

        <ActionLinkMsg
          href={routes.commonPath.signup}
          msg="계정이 없으신가요?"
          linkMsg="이메일 회원가입 하러가기"
        />
      </ButttonContain>
    </ScreenContainer>
  );
};

export default LoginScreen;
