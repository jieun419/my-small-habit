"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/button";
import ButttonContain from "@/components/button/butttonContain";
import ReportContainer from "@/components/container/reportContainer";
import ScreenContainer from "@/components/container/screenContainer";
import NotFound from "@/components/notFound";
import { routes } from "@/constants/path";
import { useGetReportMonthList } from "@/hooks/api/report";
import usePageMove from "@/hooks/usePageMove";
import { HabitMood } from "@/types/habit";
import { HabitReport } from "@/types/report";
import { formatLocaleDateToString } from "@/utils/format";
import { getEmotionIcon } from "@/utils/viewIcon";

import HabitCalenderSection from "./habitCalenderSection";
import HabitRecordSection from "./habitRecordSection";
import HabitReportSection from "./habitReportSection";

interface MyPageScreenProps {
  userId?: string;
}

const MyPageScreen = ({ userId }: MyPageScreenProps) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [currentReport, setCurrentReport] = useState<HabitReport | null>();
  const [currentTabView, setCurrentTabView] = useState<"record" | "report">("record");

  const isFuture = new Date().setHours(0, 0, 0, 0) < new Date(currentDate).setHours(0, 0, 0, 0);

  const { handlePageMove } = usePageMove();

  const { data: reportMonthList } = useGetReportMonthList({
    reportMonth: {
      userId: userId || "",
      year: currentDate.getFullYear(),
      month: currentDate.getMonth() + 1,
    },
  });

  const handleSelectedDate = (selectDate: Date) => {
    const currentReport = reportMonthList?.find(
      (el) => el.habit_record?.upload_date === formatLocaleDateToString(selectDate),
    );

    setCurrentReport(currentReport ?? null);
    setCurrentDate(selectDate);
    setCurrentTabView("record");
  };

  const handleGotoRecord = () => {
    const uploadRecordDate = formatLocaleDateToString(currentDate);
    handlePageMove({
      path: routes.userPath.habit.record.root(uploadRecordDate),
    });
  };

  useEffect(() => {
    if (!reportMonthList) return;
    const todayData = reportMonthList.find(
      (el) => el.habit_record?.upload_date === formatLocaleDateToString(currentDate),
    );

    setCurrentReport(todayData ?? null);
  }, [reportMonthList]);

  return (
    <ScreenContainer>
      <div className="mb-5 flex flex-col items-center">
        {getEmotionIcon({
          iconMoodType: (currentReport ? currentReport?.habit_record?.mood : "none") as HabitMood,
          size: "75",
        })}
      </div>

      <HabitCalenderSection
        reportMonthList={reportMonthList || null}
        currentDate={currentDate}
        handleSelectedDate={handleSelectedDate}
      />

      <ReportContainer>
        {currentReport ? (
          <>
            <div className="flex items-center gap-1">
              <Button
                variant={currentTabView === "record" ? "secondary" : "tertiary"}
                size="small"
                w="w-fit"
                onClick={() => setCurrentTabView("record")}>
                습관 기록
              </Button>
              <Button
                variant={currentTabView === "report" ? "secondary" : "tertiary"}
                size="small"
                w="w-fit"
                onClick={() => setCurrentTabView("report")}>
                리포트
              </Button>
            </div>

            {currentTabView === "record" && currentReport.habit_record && (
              <HabitRecordSection habitRecord={currentReport.habit_record} />
            )}
            {currentTabView === "report" && currentReport.report_text && (
              <HabitReportSection habitReportText={currentReport.report_text} />
            )}
          </>
        ) : (
          <div className="w-full py-10">
            <NotFound
              title={isFuture ? "지금은 기록할 수 없어요!" : "습관을 기록하지 않았어요!"}
              buttonText={isFuture ? null : "기록하기"}
              onClick={handleGotoRecord}
            />
          </div>
        )}
      </ReportContainer>

      <ButttonContain>
        <Button variant="secondary" size="medium">
          월간 리포트 보기
        </Button>
      </ButttonContain>
    </ScreenContainer>
  );
};

export default MyPageScreen;
