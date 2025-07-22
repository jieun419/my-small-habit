"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/button";
import Title from "@/components/title/title";
import { HabitReport } from "@/types/report";
import { formatCurrentDateToMD } from "@/utils/format";

import MonthCalender from "./components/calender/monthCalender";
import WeekCalender from "./components/calender/weekCalender";

type ViewMode = "week" | "month";

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
        <div className="gap-md flex w-full max-w-[320px] flex-col items-center">
          <div className="relative flex w-full justify-center">
            <Title color="text-gray-900">{formatCurrentDateToMD(currentDate)}</Title>
            <button
              className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400"
              onClick={() => handleSelectedDate(new Date())}>
              <span className="text-xs text-gray-400">초기화</span>
            </button>
          </div>

          <WeekCalender
            currentDate={currentDate}
            reportMonthList={reportMonthList || []}
            handleSelectedDate={handleSelectedDate}
          />
        </div>
      )}
      {viewMode === "month" && (
        <MonthCalender
          currentDate={currentDate}
          reportMonthList={reportMonthList || []}
          handleSelectedDate={handleSelectedDate}
        />
      )}

      <div className="my-[15px] flex justify-center">
        <Button
          variant="tertiary"
          size="small"
          w="w-fit"
          onClick={() => setViewMode((prev) => (prev === "week" ? "month" : "week"))}>
          {viewMode === "week" ? "월간 보기" : "주간 보기"}
        </Button>
      </div>
    </>
  );
};

export default HabitCalenderSection;
