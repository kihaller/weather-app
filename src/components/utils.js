export function toCelsius(fahrenheitTemp) {
  return Math.floor(((fahrenheitTemp - 32) * 5) / 9);
}

function getDayOfWeek(timestamp) {
  const date = new Date(timestamp * 1000);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[date.getDay()];
}

export async function fetchWeatherData(lat, lon) {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=21f56e253e93188fc5823fc00953aca4&units=imperial`
  ).then((response) => response.json());
  return data;
}

export function convertWeatherData(data) {
  const today = {
    currentTemp: data.current.temp,
    minTemp: data.daily[0].temp.min,
    maxTemp: data.daily[0].temp.max,
    conditionName: data.current.weather[0].description,
    conditionIcon: data.current.weather[0].icon,
  };

  let forecasts = [];
  for (let i = 1; i < 5; i++) {
    forecasts.push({
      day: getDayOfWeek(data.daily[i].dt),
      minTemp: data.daily[i].temp.min,
      maxTemp: data.daily[i].temp.max,
      conditionName: data.daily[i].weather[0].description,
      conditionIcon: data.daily[i].weather[0].icon,
    });
  }

  return [today, forecasts];
}
