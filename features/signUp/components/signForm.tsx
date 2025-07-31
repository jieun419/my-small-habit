"use client";

import { Button } from "@/components/button";
import BaseInput from "@/components/input/baseInput";
import ErrorMsg from "@/components/text/errorMsg";
import useAuth from "@/hooks/useAuth";

const SignForm = () => {
  const { handleUserSignUp, errorMsg, userInfo, setUserInfo } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
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
      {errorMsg && <ErrorMsg errorMsg={errorMsg} />}
      <Button variant="secondary" size="medium" type="submit">
        회원가입
      </Button>
    </form>
  );
};

export default SignForm;
