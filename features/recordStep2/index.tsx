"use client";

import { useRef } from "react";

import { Button } from "@/components/button";
import ButttonContain from "@/components/button/butttonContain";
import ScreenContainer from "@/components/container/screenContainer";
import CircleTitle from "@/components/title/circleTitle";
import SubTitle from "@/components/title/subTitle";
import Title from "@/components/title/title";

import RecordMood from "./recordMood";
import RecordReview from "./recordReview";

const RecordStep2Screen = () => {
  const fileRef = useRef<HTMLInputElement>(null);

  return (
    <ScreenContainer>
      <CircleTitle>
        <Title color="text-gray-900" size="text-xl">
          그날을 기록하세요
        </Title>
      </CircleTitle>
      <article className="flex w-full flex-col gap-[50px]">
        <section className="flex w-full flex-col items-center gap-4">
          <SubTitle color="text-gray-900" size="text-lg">
            기분은 어떠셨나요?
          </SubTitle>
          <RecordMood />
        </section>

        <section className="flex w-full flex-col items-center gap-4">
          <SubTitle color="text-gray-900" size="text-lg">
            실천하면서 무엇을 느꼈나요?
          </SubTitle>
          <RecordReview fileRef={fileRef as React.RefObject<HTMLInputElement>} />
        </section>
      </article>

      <ButttonContain>
        <Button variant="negative" size="medium">
          이전
        </Button>
        <Button variant="positive" size="medium">
          기록 완료!
        </Button>
      </ButttonContain>
    </ScreenContainer>
  );
};

export default RecordStep2Screen;
