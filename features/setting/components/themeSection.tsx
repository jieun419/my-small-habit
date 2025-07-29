"use client";

import SubTitle from "@/components/title/subTitle";

import ThemeButton from "./themeButton";

const ThemeSection = () => {
  const themeButtonItems = [
    {
      type: "dark",
      text: "다크",
      isActive: false,
      onClick: () => console.log("dark"),
    },
    {
      type: "light",
      text: "라이트",
      isActive: true,
      onClick: () => console.log("light"),
    },
  ];

  return (
    <section className="mt-10 flex w-full flex-col gap-1 border-t border-solid border-gray-300 pt-10">
      <div className="flex w-full items-center justify-between gap-1">
        <SubTitle size="text-base">테마 선택</SubTitle>
        <div className="flex gap-1">
          {themeButtonItems.map((item) => (
            <ThemeButton
              key={item.type}
              text={item.text}
              isActive={item.isActive}
              onClieck={item.onClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemeSection;
