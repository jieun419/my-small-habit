const weekDays = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];

export const formatCurrentDateFull = () => {
  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const weekDay = weekDays[date.getDay()];

  return `${year}.${month}.${day} ${weekDay}`;
};

export const formatCurrentDateToMD = (currentDate: Date) => {
  const date = new Date(currentDate);

  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${month}월 ${day}일 `;
};

export const formatLocaleDateToString = (currentDate: Date) => {
  return currentDate
    .toLocaleDateString()
    .split(".")
    .map((el) => el.trim().padStart(2, "0"))
    .slice(0, 3)
    .join("-");
};
