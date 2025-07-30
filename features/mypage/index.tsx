"use client";

import { useEffect, useState } from "react";

import ScreenContainer from "@/components/container/screenContainer";
import { useGetReportMonthList } from "@/hooks/api/report";
import { HabitMood } from "@/types/habit";
import { HabitReport } from "@/types/report";
import { formatLocaleDateToString } from "@/utils/format";
import { getEmotionIcon } from "@/utils/viewIcon";

import BottomButtonSection from "./components/bottomButtonSection";
import HabitCalenderSection from "./components/habitCalenderSection";
import HabitResultSection from "./components/habitResultSection";

interface MyPageScreenProps {
  userId?: string;
}

const MyPageScreen = ({ userId }: MyPageScreenProps) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [currentReport, setCurrentReport] = useState<HabitReport | null>();
  const [currentTabView, setCurrentTabView] = useState<"record" | "report">("record");

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

      <HabitResultSection currentDate={currentDate} currentReport={currentReport} />

      <BottomButtonSection />
    </ScreenContainer>
  );
};

export default MyPageScreen;
