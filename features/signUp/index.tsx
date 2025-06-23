"use client";

import Link from "next/link";

import { Button } from "@/components/button";
import ButttonContain from "@/components/button/butttonContain";
import ScreenContainer from "@/components/container/screenContainer";
import BaseInput from "@/components/input/baseInput";
import ErrorMsg from "@/components/text/errorMsg";
import CircleTitle from "@/components/title/circleTitle";
import Title from "@/components/title/title";
import useAuth from "@/hooks/useAuth";

const SignUpScreen = () => {
  const { handleUserSignUp, errorMsg, userInfo, setUserInfo } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <ScreenContainer>
      <CircleTitle>
        <Title size="text-xl">정보를 입력해주세요!</Title>
      </CircleTitle>

      <form onSubmit={handleUserSignUp} className="flex w-full flex-col gap-4">
        <BaseInput
          label="이름"
          placeholder="이름을 입력해주세요."
          name="name"
          value={userInfo.name}
          onChange={handleChange}
          isRequired
        />
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
          minLength={8}
          maxLength={16}
        />
        <Button variant="secondary" size="medium" type="submit">
          회원가입
        </Button>
      </form>

      {errorMsg && <ErrorMsg errorMsg={errorMsg} />}

      <ButttonContain isFixed isColumn>
        <div className="flex items-center justify-center gap-2 text-center text-sm">
          <span className="text-gray-500">계정이 있으신가요?</span>
          <Link href="/login" className="text-gray-900">
            로그인 하러가기
          </Link>
        </div>
      </ButttonContain>
    </ScreenContainer>
  );
};

export default SignUpScreen;
