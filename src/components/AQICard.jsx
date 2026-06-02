import { motion } from "framer-motion";

const AQICard = ({ aqi }) => {
  if (!aqi) return null;

  const level = aqi.list[0].main.aqi;

  const labels = {
    1: "Good",
    2: "Fair",
    3: "Moderate",
    4: "Poor",
    5: "Very Poor",
  };

  const colors = {
    1: "bg-green-500",
    2: "bg-lime-500",
    3: "bg-yellow-500 text-black",
    4: "bg-orange-500",
    5: "bg-red-500",
  };

  const descriptions = {
    1: "Air quality is excellent.",
    2: "Air quality is acceptable.",
    3: "Sensitive people may experience issues.",
    4: "Limit outdoor activities if possible.",
    5: "Health warning: avoid prolonged exposure.",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.02,
      }}
      className="max-w-4xl mx-auto mt-6 p-6 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-cyan-400/20 text-white shadow-[0_0_30px_rgba(0,255,255,0.12)]"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          🌍 Air Quality Index
        </h2>

        <span
          className={`px-4 py-2 rounded-xl text-sm font-bold ${colors[level]}`}
        >
          {labels[level]}
        </span>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div>
          <h3 className="text-6xl font-bold">
            {level}
          </h3>

          <p className="text-slate-300 mt-2">
            AQI Level: {level}/5
          </p>

          <p className="text-cyan-300 mt-2 text-sm">
            {descriptions[level]}
          </p>
        </div>

        <div className="text-7xl">
          🌎
        </div>
      </div>

      <div className="mt-6 w-full bg-slate-700 rounded-full h-3 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${(level / 5) * 100}%` }}
          transition={{ duration: 1 }}
          className={`h-full ${colors[level].split(" ")[0]}`}
        />
      </div>
    </motion.div>
  );
};

export default AQICard;