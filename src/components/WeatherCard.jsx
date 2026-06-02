import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const WeatherCard = ({ weather }) => {
  const { darkMode } = useTheme();

  if (!weather) return null;

  const condition = weather.weather[0].main;

  const weatherIcon =
    condition === "Clear"
      ? "☀️"
      : condition === "Clouds"
      ? "☁️"
      : condition === "Rain"
      ? "🌧️"
      : condition === "Thunderstorm"
      ? "⛈️"
      : condition === "Snow"
      ? "❄️"
      : "🌤️";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.01,
      }}
      className={`max-w-4xl mx-auto mt-6 rounded-[30px]
      ${
        darkMode
          ? "bg-slate-900/40 text-white border-cyan-400/20 shadow-[0_0_50px_rgba(0,255,255,0.15)]"
          : "bg-white/80 text-slate-800 border-white/50 shadow-2xl"
      }
      backdrop-blur-xl border p-8`}
    >
      <h2 className="text-3xl font-bold">
        {weather.name}, {weather.sys.country}
      </h2>

      <div className="flex items-center justify-between mt-4">
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-7xl font-bold"
        >
          {Math.round(weather.main.temp)}°
        </motion.h1>

        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="text-7xl"
        >
          {weatherIcon}
        </motion.div>
      </div>

      <p
        className={`text-xl capitalize mt-2 ${
          darkMode ? "text-cyan-200" : "text-blue-600"
        }`}
      >
        {weather.weather[0].description}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        <div>
          <p className="text-sm opacity-70">Humidity</p>
          <p className="text-xl font-semibold">
            {weather.main.humidity}%
          </p>
        </div>

        <div>
          <p className="text-sm opacity-70">Wind</p>
          <p className="text-xl font-semibold">
            {weather.wind.speed} m/s
          </p>
        </div>

        <div>
          <p className="text-sm opacity-70">Feels Like</p>
          <p className="text-xl font-semibold">
            {Math.round(weather.main.feels_like)}°C
          </p>
        </div>

        <div>
          <p className="text-sm opacity-70">Pressure</p>
          <p className="text-xl font-semibold">
            {weather.main.pressure} hPa
          </p>
        </div>

        <div>
          <p className="text-sm opacity-70">Visibility</p>
          <p className="text-xl font-semibold">
            {(weather.visibility / 1000).toFixed(1)} km
          </p>
        </div>

        <div>
          <p className="text-sm opacity-70">Sunrise</p>
          <p className="text-xl font-semibold">
            {new Date(weather.sys.sunrise * 1000).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>

        <div>
          <p className="text-sm opacity-70">Sunset</p>
          <p className="text-xl font-semibold">
            {new Date(weather.sys.sunset * 1000).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>

        <div>
          <p className="text-sm opacity-70">Clouds</p>
          <p className="text-xl font-semibold">
            {weather.clouds.all}%
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default WeatherCard;