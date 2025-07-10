"use client";

import { useEffect, useState } from "react";

import {
  IconMood1VerySad,
  IconMood2SlightlySad,
  IconMood3Neutral,
  IconMood4SlightlyHappy,
  IconMood5VeryHappy,
} from "@/assets/icons";

interface FullScreenLoadingProps {
  loadingMsg?: string[];
}

const FullScreenLoading = ({ loadingMsg }: FullScreenLoadingProps) => {
  const [randomMsg, setRandomMsg] = useState("조금만 기다려 주세요");
  const [randomIcon, setRandomIcon] = useState<{ name: string; icon: React.ReactNode }>({
    name: "IconMood5VeryHappy",
    icon: <IconMood5VeryHappy />,
  });

  const loadingMsgs = loadingMsg || ["리포트 작성 중이에요", "조금만 기다려 주세요"];
  const loadingIcons = [
    {
      name: "IconMood1VerySad",
      icon: <IconMood1VerySad />,
    },
    { name: "IconMood2SlightlySad", icon: <IconMood2SlightlySad /> },
    { name: "IconMood3Neutral", icon: <IconMood3Neutral /> },
    { name: "IconMood4SlightlyHappy", icon: <IconMood4SlightlyHappy /> },
    { name: "IconMood5VeryHappy", icon: <IconMood5VeryHappy /> },
  ];

  const changeIcon = () => {
    setRandomIcon((prevIcon) => {
      const currentIdx = loadingIcons.findIndex((el) => el.name === prevIcon.name);
      const nextIndx = (currentIdx + 1) % loadingIcons.length;
      return loadingIcons[nextIndx];
    });
  };

  const changeMsg = () => {
    setRandomMsg((prevMsg) => {
      const currentIdx = loadingMsgs.findIndex((el) => el === prevMsg);
      const nextIdx = (currentIdx + 1) % loadingMsgs.length;
      return loadingMsgs[nextIdx];
    });
  };

  useEffect(() => {
    const intervalIcon = setInterval(changeIcon, 500);
    const intervalMsg = setInterval(changeMsg, 2000);

    return () => {
      clearInterval(intervalIcon);
      clearInterval(intervalMsg);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 z-10 flex h-full w-full flex-col items-center justify-center bg-gray-900">
      <div className="flex flex-col items-center justify-center gap-10">
        {randomIcon && randomIcon.icon}
        <p className="text-md font-bold text-white">{randomMsg && randomMsg}</p>
      </div>
    </div>
  );
};

export default FullScreenLoading;
