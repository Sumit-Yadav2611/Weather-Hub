import { useEffect } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import ForecastCard from "../components/ForecastCard";
import HourlyForecast from "../components/HourlyForecast";
import { useWeather } from "../hooks/useWeather";
import { useTheme } from "../context/ThemeContext";
import WeatherBackground from "../components/WeatherBackground";
import FavoriteCities from "../components/FavoriteCities";
import WeatherAnimation from "../components/WeatherAnimation";
import WeatherMap from "../components/WeatherMap";
import WeatherAlert from "../components/WeatherAlert";
import AQICard from "../components/AQICard";
import Footer from "../components/Footer";

const Home = () => {
 const {
  weather,
  forecast,
  aqi,
  loading,
  favorites,
  addFavorite,
  removeFavorite,
  fetchByCity,
  fetchCurrentLocation,
} = useWeather();

  const { darkMode, setDarkMode } = useTheme();
  
  useEffect(() => {
    fetchCurrentLocation();
  }, []);
  
  const condition = weather?.weather?.[0]?.main || "Clear";

  return (
    <div
      className={`min-h-screen relative overflow-hidden ${
        darkMode
        ? "bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#001f2d]"
        : "bg-gradient-to-br from-sky-400 via-blue-300 to-cyan-200"
      }`}
    >
        <WeatherBackground
          condition={condition}
          darkMode={darkMode}
        />
      <WeatherAnimation condition={condition} />
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Main Gradient */}
        <div
          className={`absolute inset-0 ${
            darkMode
              ? "bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#001f2d]"
              : "bg-gradient-to-br from-sky-200 via-blue-100 to-white"
          }`}
        />

        {/* Cyan Glow */}
        {darkMode && (
          <>
            <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

            <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />
          </>
        )}
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 py-8">

       <div className="text-center mb-10">
          <h1
            className={`font-bold text-5xl md:text-7xl ${
              darkMode ? "text-white" : "text-slate-800"
            }`}
          >
            Weather<span className="text-cyan-400">-Hub</span>
          </h1>
        
          <p
            className={`mt-4 text-sm md:text-lg tracking-wider ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Live Weather • AQI • Forecasts • Maps
          </p>
        </div>
        
        {/* Theme Toggle */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-6 py-3 rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-cyan-400/20 text-white font-semibold hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all duration-300"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        <div className="max-w-md mx-auto">
          <SearchBar onSearch={fetchByCity} />
        </div>
        <WeatherAlert weather={weather} />
          
          <div className="mt-8">
          {loading ? (
            <div className="text-center">
              <h2 className="text-cyan-300 text-2xl animate-pulse">
                Loading Weather...
              </h2>
            </div>
          ) : (
            <>
              <WeatherCard weather={weather} />
             
                    
              {weather && (
                <div className="flex justify-center mt-4">
                  <button
                    onClick={() => addFavorite(weather.name)}
                    className="group px-6 py-4 rounded-2xl bg-slate-900/40 backdrop-blur-xl border border-cyan-400/20 text-white font-semibold transition-all duration-300 hover:scale-105 hover:border-yellow-400 hover:shadow-[0_0_25px_rgba(250,204,21,0.3)]"
                  >
                    <span className="group-hover:text-yellow-300">
                      ⭐ Add to Favorites
                    </span>
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        <FavoriteCities
           favorites={favorites}
           onCityClick={fetchByCity}
           removeFavorite={removeFavorite}
         />

         <AQICard aqi={aqi} />
        {/* 5 Day Forecast */}
        {forecast && (
          <div className="max-w-5xl mx-auto mt-8">
            <h2
              className={`text-2xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-slate-800"
              }`}
            >
              5-Day Forecast
            </h2>

            <div className="flex gap-4 overflow-x-auto pb-4">
              {forecast.list
                .filter((_, index) => index % 8 === 0)
                .slice(0, 5)
                .map((day, index) => (
                  <ForecastCard key={index} day={day} />
                ))}
            </div>
          </div>
        )}

        {/* Hourly Forecast */}
        {forecast && <HourlyForecast forecast={forecast} />}
        {/* Weather Map */}
        <WeatherMap weather={weather} />
        <Footer/>
      </div>
    </div>
  );
};

export default Home;