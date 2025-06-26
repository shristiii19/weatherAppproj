import axios from "axios";
import React, { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/weather/${city}`);
      setWeather(response.data);
      setError("");
    } catch (err) {
      setError("City not found or server issue.");
      setWeather(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-4xl font-bold mb-6 text-blue-400">Weather App</h1>

      <div className="flex space-x-3">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-3 w-72 text-black rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={fetchWeather}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold"
        >
          Get Weather
        </button>
      </div>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {weather && (
        <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-lg w-96 text-center">
          <h2 className="text-3xl font-bold text-blue-400">{weather.name}</h2>
          <p className="text-lg mt-2">{weather.weather[0].description}</p>

          <div className="mt-4 space-y-2">
            <p className="text-lg">
              🌡️ Temperature: <span className="font-semibold">{weather.main.temp}°C</span>
            </p>
            <p className="text-lg">
              💧 Humidity: <span className="font-semibold">{weather.main.humidity}%</span>
            </p>
            <p className="text-lg">
              🌍 Latitude: <span className="font-semibold">{weather.coord.lat}</span>
            </p>
            <p className="text-lg">
              📍 Longitude: <span className="font-semibold">{weather.coord.lon}</span>
            </p>
            <p className="text-lg">
              🌬️ Air Pressure: <span className="font-semibold">{weather.main.pressure} hPa</span>
            </p>
            <p className="text-lg">
              👁️ Visibility: <span className="font-semibold">{weather.visibility / 1000} km</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
