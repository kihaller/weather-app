import React, { useContext } from "react";
import DailyForecast from "./DailyForecasts";
import { WeatherContext } from "../contexts/WeatherContext";

const Forecast = () => {
  const { selectedCity } = useContext(WeatherContext);
  return (
    <div className="forecast">
      {selectedCity.forecasts.map((forecast, index) => (
        <DailyForecast forecast={forecast} key={index} />
      ))}
    </div>
  );
};

export default Forecast;
