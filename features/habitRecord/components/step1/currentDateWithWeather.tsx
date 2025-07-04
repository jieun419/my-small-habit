import Image from "next/image";
import { useState, useEffect, memo } from "react";

import { formatCurrentDateFull } from "@/utils/format";

const CurrentDateWithWeather = () => {
  const [city, setCity] = useState("Seoul");
  const [weatherIconPath, setWeatherIconPath] = useState("");
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_KEY;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
        );
        const data = await response.json();

        if (data) {
          setWeatherIconPath(`https://openweathermap.com/img/wn/${data.weather?.[0]?.icon}.png`);
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="flex w-full items-center justify-between gap-4">
      <span className="text-sm text-gray-400">{formatCurrentDateFull()}</span>
      <span className="text-sm text-gray-400">
        {weatherIconPath && (
          <Image src={weatherIconPath} alt="weather_icon" width={30} height={30} />
        )}
      </span>
    </div>
  );
};

export default CurrentDateWithWeather;
