import Image from "next/image";

import { useGetWeather } from "@/hooks/api/habit";
import { formatCurrentDateFull } from "@/utils/format";

const CurrentDateWithWeather = () => {
  const { data: weatherIcon } = useGetWeather();

  return (
    <div className="flex w-full items-center justify-between gap-4">
      <span className="text-sm text-gray-400">{formatCurrentDateFull()}</span>
      <span className="text-sm text-gray-400">
        {weatherIcon && <Image src={weatherIcon} alt="weather_icon" width={30} height={30} />}
      </span>
    </div>
  );
};

export default CurrentDateWithWeather;
