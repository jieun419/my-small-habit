import {
  IconMood1VerySad,
  IconMood2SlightlySad,
  IconMood3Neutral,
  IconMood4SlightlyHappy,
  IconMood5VeryHappy,
} from "@/assets/icons";
import IconMoodNone from "@/assets/icons/icon-mood-none";
import { Button } from "@/components/button";
import ButttonContain from "@/components/button/butttonContain";
import ReportContainer from "@/components/container/reportContainer";
import ScreenContainer from "@/components/container/screenContainer";
import NotFound from "@/components/notFound";
import Title from "@/components/title/title";

const ReportWeekScreen = () => {
  return (
    <ScreenContainer>
      <div className="gap-md mb-[30px] flex flex-col items-center">
        <Title color="text-gray-900">06월 16일 (금)</Title>
        <div>
          <IconMood5VeryHappy className="h-[75px] w-[75px]" />
        </div>
      </div>

      <div className="gap-sm flex w-full flex-col items-center justify-center">
        <div className="mx-auto flex w-full justify-between gap-3">
          <div className="relative flex flex-col items-center gap-1 px-2 py-1">
            <span className="text-sm font-bold text-gray-900">토</span>
            <span className="flex items-center justify-center">
              <IconMood2SlightlySad className="h-[19px] w-[19px]" />
            </span>
          </div>
          <div className="relative flex flex-col items-center gap-1 px-2 py-1">
            <span className="text-sm font-bold text-gray-900">일</span>
            <span className="flex items-center justify-center">
              <IconMood1VerySad className="h-[19px] w-[19px]" />
            </span>
          </div>
          <div className="relative flex flex-col items-center gap-1 px-2 py-1">
            <span className="text-sm font-bold text-gray-900">월</span>
            <span className="flex items-center justify-center">
              <IconMood3Neutral className="h-[19px] w-[19px]" />
            </span>
            <div className="absolute bottom-0 left-0 -z-1 h-full w-full rounded-md bg-gray-100" />
          </div>
          <div className="relative flex flex-col items-center gap-1 px-2 py-1">
            <span className="text-sm font-bold text-gray-900">화</span>
            <span className="flex items-center justify-center">
              <IconMood5VeryHappy className="h-[19px] w-[19px]" />
            </span>
          </div>
          <div className="relative flex flex-col items-center gap-1 px-2 py-1">
            <span className="text-sm font-bold text-gray-900">수</span>
            <span className="flex items-center justify-center">
              <IconMood4SlightlyHappy className="h-[19px] w-[19px]" />
            </span>
          </div>
          <div className="relative flex flex-col items-center gap-1 px-2 py-1">
            <span className="text-sm font-bold text-gray-900">목</span>
            <span className="flex items-center justify-center">
              <IconMoodNone className="h-[19px] w-[19px]" />
            </span>
          </div>
          <div className="relative flex flex-col items-center gap-1 px-2 py-1">
            <span className="text-sm font-bold text-gray-900">금</span>
            <span className="flex items-center justify-center">
              <IconMood5VeryHappy className="h-[19px] w-[19px]" />
            </span>
          </div>
        </div>
      </div>

      <div className="my-[15px] flex justify-center">
        <Button variant="tertiary" size="small" w="w-fit">
          월로 보기
        </Button>
      </div>

      <ReportContainer>
        <NotFound title="습관을 기록하지 않았어요!" buttonText="기록하기" />
      </ReportContainer>

      <ButttonContain>
        <Button variant="secondary" size="medium">
          월간 리포트 보기
        </Button>
      </ButttonContain>
    </ScreenContainer>
  );
};

export default ReportWeekScreen;
