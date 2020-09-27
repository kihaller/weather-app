import React from "react";
import { toCelsius } from "./utils";

const DailyForecast = ({ forecast }) => {
  const conditionIcon = forecast.conditionIcon;
  const conditionName = forecast.conditionName;
  const minTemp = forecast.minTemp;
  const maxTemp = forecast.maxTemp;

  return (
    <div className="daily-forecast">
      <h2>{forecast.day}</h2>
      <img src={`images/${conditionIcon}.svg`} alt={conditionName} />
      <span>
        {toCelsius(minTemp)}°C - {toCelsius(maxTemp)}°C
      </span>
      <span className="temp-imperial">
        {Math.floor(minTemp)}°F - {Math.floor(maxTemp)}°F
      </span>
    </div>
  );
};

export default DailyForecast;
