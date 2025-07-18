import { HabitMood } from "@/types/habit";
import { HabitReport } from "@/types/report";
import { formatLocaleDateToString } from "@/utils/format";
import { getEmotionIcon } from "@/utils/viewIcon";

interface WeekCalenderProps {
  currentDate: Date;
  reportMonthList: HabitReport[];
  handleSelectedDate: (selectDate: Date) => void;
}

const WeekCalender = ({ currentDate, reportMonthList, handleSelectedDate }: WeekCalenderProps) => {
  const TOTAL_DAYS = 7;
  const DAY_GAP = 10;

  const getWeekDate = () => {
    const year = currentDate.getUTCFullYear();
    const month = currentDate.getUTCMonth();
    const date = currentDate.getUTCDate();

    const centerDay = new Date(Date.UTC(year, month, date));
    const weekStart = new Date(centerDay);
    weekStart.setUTCDate(centerDay.getUTCDate() - centerDay.getUTCDay());

    return Array.from({ length: TOTAL_DAYS }).map((_, i) => {
      const day = new Date(weekStart);
      day.setUTCDate(weekStart.getUTCDate() + i);
      return day;
    });
  };

  return (
    <div className="mx-auto flex w-full items-center justify-center overflow-hidden">
      <div
        className="flex w-full items-center justify-center transition-all"
        style={{ gap: `${DAY_GAP}px` }}>
        {getWeekDate().map((day, idx) => {
          const weekDay = day.toLocaleDateString("ko-KR", { weekday: "short" });
          const isSelected = day.toDateString() === currentDate.toDateString();

          return (
            <button
              key={idx}
              className={`relative flex flex-col items-center gap-2 rounded-md p-0 px-2 py-1 ${isSelected ? "bg-gray-100" : "hover:bg-gray-50"} `}
              onClick={() => handleSelectedDate(day)}>
              <span className="text-sm font-bold text-gray-900">{weekDay}</span>
              <span>
                {getEmotionIcon({
                  iconMoodType: reportMonthList.find(
                    (el) => el.habit_record?.upload_date === formatLocaleDateToString(day),
                  )?.habit_record?.mood as HabitMood,
                  size: "20",
                })}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default WeekCalender;
