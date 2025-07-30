"use client";

import { useState } from "react";

import ReportContainer from "@/components/container/reportContainer";
import NotFound from "@/components/notFound";
import { routes } from "@/constants/path";
import usePageMove from "@/hooks/usePageMove";
import { HabitReport } from "@/types/report";
import { formatLocaleDateToString } from "@/utils/format";

import ContentButtonSection from "./habitResult/contentButtonSection";
import HabitRecordContent from "./habitResult/habitRecordContent";
import HabitReportContent from "./habitResult/habitReportContent";

interface HabitResultSectionProps {
  currentDate: Date;
  currentReport?: HabitReport | null;
}

const HabitResultSection = ({ currentDate, currentReport }: HabitResultSectionProps) => {
  const { handlePageMove } = usePageMove();

  const [currentTabView, setCurrentTabView] = useState<"record" | "report">("record");

  const isFuture = new Date().setHours(0, 0, 0, 0) < new Date(currentDate).setHours(0, 0, 0, 0);

  const handleGotoRecord = () => {
    const uploadRecordDate = formatLocaleDateToString(currentDate);
    handlePageMove({
      path: routes.userPath.habit.record.root(uploadRecordDate),
    });
  };

  return (
    <ReportContainer>
      {currentReport ? (
        <>
          <ContentButtonSection
            currentTabView={currentTabView}
            setCurrentTabView={setCurrentTabView}
          />

          {currentTabView === "record" && currentReport.habit_record && (
            <HabitRecordContent habitRecord={currentReport.habit_record} />
          )}
          {currentTabView === "report" && currentReport.report_text && (
            <HabitReportContent habitReportText={currentReport.report_text} />
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
  );
};

export default HabitResultSection;
