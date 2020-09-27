import React, { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import City from "./City";

const CitySelector = () => {
  const { cities } = useContext(WeatherContext);
  return (
    <div className="city-selector">
      {cities.map((city, index) => (
        <City city={city} key={index} />
      ))}
      {/* <button>+</button> */}
    </div>
  );
};

export default CitySelector;
