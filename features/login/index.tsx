"use client";

import Link from "next/link";

import { IconGoogle } from "@/assets/icons";
import { Button } from "@/components/button";
import ButttonContain from "@/components/button/butttonContain";
import ScreenContainer from "@/components/container/screenContainer";
import BaseInput from "@/components/input/baseInput";
import ErrorMsg from "@/components/text/errorMsg";
import CircleTitle from "@/components/title/circleTitle";
import Title from "@/components/title/title";
import useAuth from "@/hooks/useAuth";

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

      <form onSubmit={handleUserLogin} className="flex w-full flex-col gap-4">
        <BaseInput
          label="이메일"
          placeholder="이메일을 입력해주세요."
          name="email"
          type="email"
          value={userInfo.email}
          onChange={handleChange}
          isRequired
        />
        <BaseInput
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          name="password"
          type="password"
          value={userInfo.password}
          onChange={handleChange}
          isRequired
        />
        {errorMsg && <ErrorMsg errorMsg={errorMsg} />}
        <Button variant="secondary" size="medium" type="submit">
          로그인
        </Button>
      </form>

      <div className="mt-7 flex w-full flex-col gap-3">
        <div className="flex items-center justify-center gap-2 text-center">
          <span className="text-sm text-gray-500">or</span>
        </div>

        <Button variant="white" size="medium" isIcon onClick={() => handleUserAuthLogin("google")}>
          <IconGoogle className="h-5 w-5" />
          Google 로그인
        </Button>
      </div>

      <ButttonContain isFixed isColumn>
        <div className="flex items-center justify-center gap-2 text-center text-sm">
          <span className="text-gray-500">계정이 없으신가요?</span>
          <Link href="/signup" className="text-gray-900">
            회원가입
          </Link>
        </div>
      </ButttonContain>
    </ScreenContainer>
  );
};

export default LoginScreen;
