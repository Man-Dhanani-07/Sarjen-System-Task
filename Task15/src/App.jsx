import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");

  async function searchWeather() {
    if (!city) {
      setResult("Enter city name");
      return;
    }

    try {
      const geoResponse = await fetch(
        "https://geocoding-api.open-meteo.com/v1/search?name=" + encodeURIComponent(city)
      );
      const geoData = await geoResponse.json();

      if (!geoData.results || geoData.results.length === 0) {
        setResult("City not found");
        return;
      }

      const lat = geoData.results[0].latitude;
      const lon = geoData.results[0].longitude;
      const weatherResponse = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=" +
          lat +
          "&longitude=" +
          lon +
          "&current=temperature_2m,wind_speed_10m"
      );
      const weatherData = await weatherResponse.json();

      const place = geoData.results[0].name;
      const temp = weatherData.current.temperature_2m;
      const wind = weatherData.current.wind_speed_10m;

      setResult(place + " || Temp: " + temp + " C || Wind: " + wind + " km/h");
    } catch {
      setResult("API error");
    }
  }

  return (
    <div>
      <h2>Weather App</h2>

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={searchWeather}>Search</button>

      <p>{result}</p>
    </div>
  );
}

export default App;
