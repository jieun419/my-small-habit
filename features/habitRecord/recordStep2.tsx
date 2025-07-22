"use client";

import { Button } from "@/components/button";
import ButttonContain from "@/components/button/butttonContain";
import ScreenContainer from "@/components/container/screenContainer";
import CircleTitle from "@/components/title/circleTitle";
import SubTitle from "@/components/title/subTitle";
import Title from "@/components/title/title";
import { HabitMood } from "@/types/habit";
import { toast } from "@/utils/toast";

import RecordMood from "./components/step2/recordMood";
import RecordRetrospect from "./components/step2/recordRetrospect";

import { HabitRecord } from ".";

interface RecordStep2Props {
  habitRecord: HabitRecord;
  uploadHabitRecord: () => void;
  upDateHabitRecord: (habitRecord: Partial<HabitRecord>) => void;
  handleChangeStep: (step: "step1" | "step2") => void;
}

const RecordStep2 = ({
  habitRecord,
  uploadHabitRecord,
  upDateHabitRecord,
  handleChangeStep,
}: RecordStep2Props) => {
  const fileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const MAX_RETROSPECT_FILE = 4;
    const files = e.target.files;

    if (files) {
      if (
        files?.length > MAX_RETROSPECT_FILE ||
        files?.length + (habitRecord.retrospectFiles?.length ?? 0) > MAX_RETROSPECT_FILE
      ) {
        return toast("최대 4개 업로드 가능합니다.");
      }

      for (let i = 0; i < files?.length; i++) {
        const currentImageUrl = URL.createObjectURL(files[i]);

        upDateHabitRecord({ retrospectFiles: [currentImageUrl] });
      }
    }
  };

  const deleteRetrospectFile = (fileUrl: string) => {
    if (!habitRecord.retrospectFiles) return;
    const upDateFiles = habitRecord.retrospectFiles.filter((el) => el !== fileUrl);
    upDateHabitRecord({ retrospectFiles: upDateFiles });
  };

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
          <RecordMood
            currentMood={habitRecord.mood as HabitMood}
            upDateHabitRecord={upDateHabitRecord}
          />
        </section>

        <section className="flex w-full flex-col items-center gap-4">
          <SubTitle color="text-gray-900" size="text-lg">
            실천하면서 무엇을 느꼈나요?
          </SubTitle>
          <RecordRetrospect
            fileChange={fileChange}
            deleteRetrospectFile={deleteRetrospectFile}
            upDateHabitRecord={upDateHabitRecord}
            retrospectFiles={habitRecord.retrospectFiles ?? []}
            retrospectText={habitRecord.retrospectText ?? ""}
          />
        </section>
      </article>

      <ButttonContain>
        <Button variant="negative" size="medium" onClick={() => handleChangeStep("step1")}>
          이전으로
        </Button>
        <Button variant="positive" size="medium" onClick={uploadHabitRecord}>
          기록 완료!
        </Button>
      </ButttonContain>
    </ScreenContainer>
  );
};

export default RecordStep2;
