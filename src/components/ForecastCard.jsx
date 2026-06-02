import { motion } from "framer-motion";

const ForecastCard = ({ day }) => {
  const condition = day.weather[0].main;

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
      whileHover={{
        scale: 1.05,
        y: -5,
      }}
      transition={{ duration: 0.2 }}
      className="min-w-[140px] rounded-2xl bg-slate-900/40 backdrop-blur-xl border border-cyan-400/20 p-4 text-white shadow-lg"
    >
      <h3 className="font-semibold text-center">
        {new Date(day.dt_txt).toLocaleDateString("en-US", {
          weekday: "short",
        })}
      </h3>

      <div className="text-5xl mt-3 text-center">
        {weatherIcon}
      </div>

      <p className="mt-3 text-2xl font-bold text-center">
        {Math.round(day.main.temp)}°
      </p>

      <p className="text-center text-sm text-cyan-300 mt-1">
        {condition}
      </p>
    </motion.div>
  );
};

export default ForecastCard;