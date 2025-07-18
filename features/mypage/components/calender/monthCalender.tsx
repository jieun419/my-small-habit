import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import IconElement from "@/components/icon/iconElement";
import { HabitMood } from "@/types/habit";
import { HabitReport } from "@/types/report";
import { getEmotionIcon } from "@/utils/viewIcon";

interface MonthCalenderProps {
  currentDate: Date;
  reportMonthList: HabitReport[];
  handleSelectedDate: (selectDate: Date) => void;
}

const MonthCalender = ({
  currentDate,
  reportMonthList,
  handleSelectedDate,
}: MonthCalenderProps) => {
  const [currentMonth, setCurentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  const weekDays = ["일", "월", "화", "수", "목", "금", "토"];

  const geyDate = () => {
    const year = currentYear;
    const month = currentMonth;

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const lastDate = lastDay.getDate();
    const startWeekDay = firstDay.getDay();
    const totalCells = Math.ceil((startWeekDay + lastDate) / 7) * 7;

    const days = [];
    for (let i = 0; i < totalCells; i++) {
      const dayNum = i - startWeekDay + 1;
      if (dayNum <= 0 || dayNum > lastDate) {
        days.push(null);
      } else {
        days.push(new Date(Date.UTC(year, month, dayNum)));
      }
    }
    return days;
  };

  const handleChangeMonth = (type: "prev" | "next" | "reset") => {
    if (type === "reset") {
      handleSelectedDate(new Date());
      setCurentMonth(new Date().getMonth());
      setCurrentYear(new Date().getFullYear());
      return;
    }

    let newMonth = currentMonth;
    let newYear = currentYear;

    if (type === "prev") {
      newMonth -= 1;

      if (newMonth < 0) {
        newMonth = 11;
        newYear -= 1;
      }
    }
    if (type === "next") {
      newMonth += 1;

      if (newMonth > 11) {
        newMonth = 0;
        newYear += 1;
      }
    }

    setCurentMonth(newMonth);
    setCurrentYear(newYear);
  };

  return (
    <div className="mx-auto flex w-full max-w-[320px] flex-col items-center justify-center overflow-hidden">
      <div className="relative mb-5 w-full">
        <div className="flex items-center justify-center gap-2">
          <button onClick={() => handleChangeMonth("prev")}>
            <IconElement icon={faChevronLeft} />
          </button>
          <span className="text-xl font-bold">{`${new Date().getFullYear() !== currentYear ? `${currentYear}년` : ""} ${String(currentMonth + 1).padStart(2, "0")}월`}</span>
          <button onClick={() => handleChangeMonth("next")}>
            <IconElement icon={faChevronRight} />
          </button>
        </div>
        <button
          className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400"
          onClick={() => handleChangeMonth("reset")}>
          <span className="text-xs text-gray-400">초기화</span>
        </button>
      </div>

      <div className="mb-2 grid w-full grid-cols-7 items-center justify-center">
        {weekDays.map((dayText) => (
          <span key={dayText} className="text-center text-sm font-bold text-gray-900">
            {dayText}
          </span>
        ))}
      </div>
      <div className="grid w-full grid-cols-7 items-center justify-items-center">
        {geyDate().map((day, idx) => {
          const isSelected = day?.toDateString() === currentDate.toDateString();

          if (day) {
            return (
              <button
                key={day.toISOString()}
                className={`relative flex aspect-square h-[30px] w-[30px] items-center justify-center rounded-md ${isSelected ? "bg-gray-100" : "hover:bg-gray-50"} `}
                onClick={() => {
                  if (day) handleSelectedDate(day);
                }}>
                <span>
                  {getEmotionIcon({
                    iconMoodType: reportMonthList.find(
                      (el) =>
                        el.habit_record?.upload_date.slice(0, 10) ===
                        day.toISOString().slice(0, 10),
                    )?.habit_record?.mood as HabitMood,
                    size: "20",
                  })}
                </span>
              </button>
            );
          } else {
            return <div key={idx} />;
          }
        })}
      </div>
    </div>
  );
};

export default MonthCalender;
