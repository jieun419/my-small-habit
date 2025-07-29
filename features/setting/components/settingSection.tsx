"use client";

import { routes } from "@/constants/path";
import usePageMove from "@/hooks/usePageMove";
import { toast } from "@/utils/toast";

import SettingButton from "./settingButton";

const SettingSection = () => {
  const { handlePageMove } = usePageMove();

  const settingButtonItems = [
    {
      type: "habiEdit",
      text: "습관 추가/삭제/수정 하기",
      onClick: () => handlePageMove({ path: routes.userPath.setting.habit.edit, type: "push" }),
    },
    {
      type: "yearReport",
      text: "년간 리포트 보기",
      onClick: () => toast("서비스 준비 중이에요!"),
    },
    {
      type: "userInfoEdit",
      text: "이름 수정 및 정보 확인",
      onClick: () => handlePageMove({ path: routes.userPath.setting.profile.edit, type: "push" }),
    },
  ];

  return (
    <section className="flex w-full flex-col gap-1">
      {settingButtonItems.map((item) => (
        <SettingButton key={item.type} text={item.text} onClieck={item.onClick} />
      ))}
    </section>
  );
};

export default SettingSection;
