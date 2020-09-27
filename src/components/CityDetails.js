import React, { useContext, useState } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import { toCelsius } from "./utils";

const CityDetails = () => {
  const { selectedCity } = useContext(WeatherContext);

  const conditionIcon = selectedCity.today.conditionIcon;
  const conditionName = selectedCity.today.conditionName;
  const currentTemp = selectedCity.today.currentTemp;
  const minTemp = selectedCity.today.minTemp;
  const maxTemp = selectedCity.today.maxTemp;

  return (
    <div className="selected-city">
      <h1>{selectedCity.name}</h1>
      <div className="selected-city-temp">
        <img src={`images/${conditionIcon}.svg`} alt={conditionName} />
        <span className="current-temp">{toCelsius(currentTemp)}°C</span>
        <span className="current-temp temp-imperial">
          {Math.floor(currentTemp)}°F
        </span>
        <span className="temp-range">
          {toCelsius(minTemp)}°C - {toCelsius(maxTemp)}°C
        </span>
        <span className="temp-range temp-imperial">
          {Math.floor(minTemp)}°F - {Math.floor(maxTemp)}°F
        </span>
      </div>
    </div>
  );
};

export default CityDetails;
