"use client";

import { useEffect, useState } from "react";

import { handleSignIn, handleSignUp } from "@/api/auth";
import { Button } from "@/components/button";
import ButttonContain from "@/components/button/butttonContain";
import ScreenContainer from "@/components/container/screenContainer";
import BaseInput from "@/components/input/baseInput";
import CircleTitle from "@/components/title/circleTitle";
import Title from "@/components/title/title";
import supabase from "@/lib/supabase";

const InfoAddScreen = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = async () => {
    const { data, error } = isSignUp
      ? await handleSignUp({ uesrInfo: userInfo })
      : await handleSignIn({ uesrInfo: userInfo });

    if (error) {
      setErrorMsg(
        error.code === "user_already_exists" ? "이미 존재하는 사용자입니다." : error.message,
      );
      setIsSignUp(true);
    }

    if (data) {
      const userInfo = {
        id: data.user?.id,
        email: data.user?.email,
        name: data.user?.user_metadata.name,
        created_at: data.user?.created_at,
      };

      localStorage.setItem("acces_token", data.session?.access_token || "");
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    }
  };

  const getUserInfo = async () => {
    const { data, error } = await supabase.from("userInfo").select("*");
    console.log("getUserInfo", data);
  };

  const postUserInfo = async () => {
    const userInfoStorage = JSON.parse(localStorage.getItem("userInfo") || "{}");
    console.log("userInfoStorage", userInfoStorage);

    const userInfo = {
      id: userInfoStorage.id,
      email: userInfoStorage.email,
      name: userInfoStorage.name,
      created_at: userInfoStorage.created_at,
    };

    const { data, error } = await supabase.from("userInfo").insert(userInfo);
    console.log("postUserInfo", data, error);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <ScreenContainer>
      <CircleTitle>
        <Title size="text-xl">정보를 입력해주세요!</Title>
      </CircleTitle>
      <div className="flex w-full flex-col gap-4">
        <BaseInput
          label="이름"
          placeholder="이름을 입력해주세요."
          name="name"
          value={userInfo.name}
          onChange={handleChange}
        />
        <BaseInput
          label="이메일"
          placeholder="이메일을 입력해주세요."
          name="email"
          type="email"
          value={userInfo.email}
          onChange={handleChange}
        />
        <BaseInput
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          name="password"
          type="password"
          value={userInfo.password}
          onChange={handleChange}
        />
      </div>
      {errorMsg && <p className="text-red-500">{errorMsg}</p>}
      <ButttonContain isFixed>
        <Button variant="positive" size="medium" onClick={handleSubmit}>
          정보 입력하기
        </Button>
        <Button variant="positive" size="medium" onClick={postUserInfo}>
          정보 등록
        </Button>
      </ButttonContain>
    </ScreenContainer>
  );
};

export default InfoAddScreen;
