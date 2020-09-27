import React, { createContext, useEffect, useState } from "react";
import { convertWeatherData, fetchWeatherData } from "../components/utils";

export const WeatherContext = createContext();

const WeatherContextProvider = (props) => {
  const [cities, setCities] = useState([
    {
      name: "Costa Mesa, CA",
      selected: true,
      lat: 33.6638,
      lon: -117.9047,
      today: {
        currentTemp: 68,
        minTemp: 59,
        maxTemp: 77,
        conditionName: "clear sky",
        conditionIcon: "01d",
      },
      forecasts: [
        {
          day: "Sunday",
          minTemp: 55,
          maxTemp: 80,
          conditionName: "clear sky",
          conditionIcon: "01d",
        },
        {
          day: "Monday",
          minTemp: 55,
          maxTemp: 80,
          conditionName: "clear sky",
          conditionIcon: "01d",
        },
        {
          day: "Tuesday",
          minTemp: 55,
          maxTemp: 80,
          conditionName: "clear sky",
          conditionIcon: "01d",
        },
        {
          day: "Wednesday",
          minTemp: 55,
          maxTemp: 80,
          conditionName: "clear sky",
          conditionIcon: "01d",
        },
      ],
    },
    {
      name: "San Francisco, CA",
      selected: false,
      lat: 37.7749,
      lon: -122.4194,
      today: {
        currentTemp: 81,
        minTemp: 67,
        maxTemp: 85,
        conditionName: "clear sky",
        conditionIcon: "01d",
      },
      forecasts: [],
    },
    {
      name: "New York, NY",
      selected: false,
      lat: 40.7128,
      lon: -74.006,
      today: {
        currentTemp: 78,
        minTemp: 72,
        maxTemp: 78,
        conditionName: "scattered clouds",
        conditionIcon: "03d",
      },
      forecasts: [],
    },
    {
      name: "Miami, FL",
      selected: false,
      lat: 25.7617,
      lon: -80.1918,
      today: {
        currentTemp: 85,
        minTemp: 80,
        maxTemp: 85,
        conditionName: "few clouds",
        conditionIcon: "02d",
      },
      forecasts: [],
    },
  ]);
  const [selectedCity, setSelectedCity] = useState(cities[0]);

  useEffect(() => {
    async function fetchAllCities() {
      const updatedCities = await Promise.all(
        cities.map(async (city) => {
          const data = await fetchWeatherData(city.lat, city.lon);
          const [today, forecasts] = convertWeatherData(data);
          return {
            name: city.name,
            lat: city.lat,
            lon: city.lon,
            selected: city.selected,
            today,
            forecasts,
          };
        })
      );

      setCities(updatedCities);

      // Find the selected city and setSelectedCity
      setSelectedCity(updatedCities.filter((city) => city.selected)[0]);
    }
    fetchAllCities();
  }, []);

  const addCity = (name, lat, lon) => {
    // fetch to get weather data
    // convert weather data
    // add to state
    const [today, forecasts] = []; // Placeholder (comes from API)
    setCities([...cities, { name, lat, lon, today, forecasts }]);
  };

  const changeSelectedCity = (cityName) => {
    const updatedCities = [...cities];
    updatedCities.forEach((city) => {
      if (cityName === city.name) {
        city.selected = true;
      } else {
        city.selected = false;
      }
    });

    setCities(updatedCities);
    setSelectedCity(updatedCities.filter((city) => city.selected)[0]);
  };

  return (
    <WeatherContext.Provider
      value={{ cities, selectedCity, changeSelectedCity }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
