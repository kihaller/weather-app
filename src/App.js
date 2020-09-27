import React, { useEffect, useState } from "react";
import CityDetails from "./components/CityDetails";
import CitySelector from "./components/CitySelector";
import Forecast from "./components/Forecast";
import WeatherContextProvider from "./contexts/WeatherContext";

function App() {
  return (
    <div className="App">
      <WeatherContextProvider>
        <CitySelector />
        <CityDetails />
        <Forecast />
      </WeatherContextProvider>
    </div>
  );
}

export default App;
