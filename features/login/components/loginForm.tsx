"use client";

import { Button } from "@/components/button";
import BaseInput from "@/components/input/baseInput";
import ErrorMsg from "@/components/text/errorMsg";
import useAuth from "@/hooks/useAuth";

const LoginForm = () => {
  const { handleUserLogin, errorMsg, userInfo, setUserInfo } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
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
  );
};

export default LoginForm;
