import { motion } from "framer-motion";

const FavoriteCities = ({
  favorites,
  onCityClick,
  removeFavorite,
}) => {
  if (favorites.length === 0) return null;

  return (
    <div className="max-w-4xl mx-auto mt-6">
      <h2 className="text-xl font-bold mb-3 text-white">
        ⭐ Favorite Cities
      </h2>

      <div className="flex flex-wrap gap-3">
        {favorites.map((city) => (
          <motion.div
            key={city}
            whileHover={{
              scale: 1.05,
              y: -5,
            }}
            whileTap={{
              scale: 0.95,
            }}
            transition={{
              duration: 0.2,
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-lg border border-cyan-400/20 text-white shadow-lg cursor-pointer"
          >
            <button
              onClick={() => onCityClick(city)}
              className="font-medium"
            >
              ⭐ {city}
            </button>

            <button
              onClick={() => removeFavorite(city)}
              className="text-red-400 hover:text-red-300 transition"
            >
              ✕
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteCities;