import axios from "axios";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  
  const fetchWeather = async () => {
    try {
      setError(null);
      const response = await axios.get(`http://localhost:8080/weather/${city}`);
      setWeather(response.data);
    } catch (err) {
      setError("Failed to fetch weather data. Please try again.");
      console.error("Error fetching weather:", err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 p-6">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-blue-600">Weather App</h1>
        <div className="mt-4 flex">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={fetchWeather}
            className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700"
          >
            Get Weather
          </button>
        </div>
        
        {error && <p className="text-red-500 mt-2">{error}</p>}

        {weather && (
          <div className="mt-4 bg-gray-100 p-4 rounded-md shadow">
            <h2 className="text-lg font-semibold text-blue-700">Weather in {city}</h2>
            <p className="text-gray-700">{JSON.stringify(weather)}</p>
          </div>
        )}
      </div>
    </div>
  );
}
return (
  <div className="text-center text-2xl text-blue-500">
    Tailwind CSS is working! 🚀
  </div>
);


export default App;







