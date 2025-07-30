"use client";

import { useState } from "react";

import { HabitReport } from "@/types/report";

import MonthCalender from "./calender/monthCalender";
import ViewCalenderModeButton from "./calender/viewCalenderModeButton";
import WeekCalender from "./calender/weekCalender";

export type ViewMode = "week" | "month";

interface HabitCalenderSectionProps {
  reportMonthList: HabitReport[] | null;
  currentDate: Date;
  handleSelectedDate: (selectDate: Date) => void;
}

const HabitCalenderSection = ({
  reportMonthList,
  currentDate,
  handleSelectedDate,
}: HabitCalenderSectionProps) => {
  const [viewMode, setViewMode] = useState<ViewMode>("week");

  return (
    <>
      {viewMode === "week" && (
        <WeekCalender
          currentDate={currentDate}
          reportMonthList={reportMonthList || []}
          handleSelectedDate={handleSelectedDate}
        />
      )}
      {viewMode === "month" && (
        <MonthCalender
          currentDate={currentDate}
          reportMonthList={reportMonthList || []}
          handleSelectedDate={handleSelectedDate}
        />
      )}

      <ViewCalenderModeButton viewMode={viewMode} setViewMode={setViewMode} />
    </>
  );
};

export default HabitCalenderSection;
