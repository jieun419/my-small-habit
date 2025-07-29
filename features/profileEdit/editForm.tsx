"use client";

import { FormEvent, useEffect, useState } from "react";

import { Button } from "@/components/button";
import BaseInput from "@/components/input/baseInput";
import { useGetUserInfo, useUpdateUserInfo } from "@/hooks/api/user";

interface EditFormProps {
  userId: string;
}

const EditForm = ({ userId }: EditFormProps) => {
  const { data: userInfoData } = useGetUserInfo();
  const { mutateUpdateUserInfo } = useUpdateUserInfo();

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!userInfo.name || !userId) return;
    mutateUpdateUserInfo({ userId: userId, userName: userInfo.name });
  };

  useEffect(() => {
    if (!userInfoData) return;

    if (userInfoData.name && userInfoData.email) {
      setUserInfo({
        name: userInfoData?.name,
        email: userInfoData?.email,
      });
    }
  }, [userInfoData]);

  return (
    <>
      <form onSubmit={onSubmit} className="flex w-full flex-col gap-4">
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
          isDisabled={true}
          isRequired
        />

        <Button
          variant="secondary"
          size="medium"
          type="submit"
          isDisabled={!userInfo.name || userInfoData?.name === userInfo.name}>
          수정하기
        </Button>
      </form>
    </>
  );
};

export default EditForm;
