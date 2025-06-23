"use client";

import ButttonContain from "@/components/button/butttonContain";
import ScreenContainer from "@/components/container/screenContainer";
import ActionLinkMsg from "@/components/text/actionLinkMsg";
import CircleTitle from "@/components/title/circleTitle";
import Title from "@/components/title/title";
import { routes } from "@/constants/path";
import useAuth from "@/hooks/useAuth";

import LoginForm from "./loginForm";
import SocialLogin from "./socialLogin";

const LoginScreen = () => {
  const { handleUserLogin, handleUserAuthLogin, errorMsg, userInfo, setUserInfo } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <ScreenContainer>
      <CircleTitle>
        <Title size="text-xl">로그인하고 습관을 기록하세요!</Title>
      </CircleTitle>

      <LoginForm
        handleUserLogin={handleUserLogin}
        userInfo={userInfo}
        handleChange={handleChange}
        errorMsg={errorMsg}
      />

      <SocialLogin handleUserAuthLogin={handleUserAuthLogin} />

      <ButttonContain isFixed isColumn>
        <ActionLinkMsg
          href={routes.commonPath.signup}
          msg="계정이 없으신가요?"
          linkMsg="회원가입 하러가기"
        />
      </ButttonContain>
    </ScreenContainer>
  );
};

export default LoginScreen;
