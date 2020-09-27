import React, { useContext } from "react";
import { toCelsius } from "./utils";
import { WeatherContext } from "../contexts/WeatherContext";

const City = ({ city }) => {
  const { changeSelectedCity } = useContext(WeatherContext);
  const conditionIcon = city.today.conditionIcon;
  const conditionName = city.today.conditionName;
  const currentTemp = city.today.currentTemp;

  return (
    <div
      onClick={() => changeSelectedCity(city.name)}
      className={`city ${city.selected ? "selected" : null}`}
    >
      <h3>{city.name}</h3>
      <img src={`images/${conditionIcon}.svg`} alt={conditionName} />
      <span>
        {toCelsius(currentTemp)}°C /
        <span className="temp-imperial"> {Math.floor(currentTemp)}°F</span>
      </span>
    </div>
  );
};

export default City;
