import { useState } from "react";
import { motion } from "framer-motion";
import { searchCities } from "../services/weatherApi";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);

  const handleChange = async (e) => {
    const value = e.target.value;

    setCity(value);

    if (value.length < 2) {
      setSuggestions([]);
      return;
    }

    try {
      setLoadingSuggestions(true);

      const data = await searchCities(value);

      setSuggestions(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingSuggestions(false);
    }
  };

  const startVoiceSearch = () => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice Search not supported in this browser");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;

      setCity(transcript);
      onSearch(transcript);
    };

    recognition.onerror = (event) => {
      console.error(event.error);
    };
  };

  return (
    <div className="relative flex gap-3">
      {/* Input + Suggestions */}
      <div className="relative flex-1">
        <input
          type="text"
          value={city}
          onChange={handleChange}
          placeholder="Search city..."
          className="w-full bg-white/60 backdrop-blur-lg border border-white/50 text-slate-800 px-5 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-cyan-400 transition"
        />

        {loadingSuggestions && (
          <div className="absolute top-full mt-2 text-white text-sm">
            Searching...
          </div>
        )}

        {suggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 mt-2 rounded-2xl bg-white shadow-2xl z-50 overflow-hidden"
          >
            {suggestions.map((cityData, index) => (
              <motion.div
                key={index}
                whileHover={{
                  backgroundColor: "#e0f2fe",
                }}
                onClick={() => {
                  setCity(cityData.name);
                  setSuggestions([]);
                  onSearch(cityData.name);
                }}
                className="px-4 py-3 cursor-pointer border-b"
              >
                <div className="font-medium text-slate-800">
                  {cityData.name}
                </div>

                <div className="text-sm text-slate-500">
                  {cityData.state
                    ? `${cityData.state}, `
                    : ""}
                  {cityData.country}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Search Button */}
      <motion.button
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={() => onSearch(city)}
        className="px-6 py-4 rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-cyan-400/20 text-white font-semibold hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all"
      >
        Search
      </motion.button>

      {/* Voice Button */}
      <motion.button
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
        onClick={startVoiceSearch}
        className="px-5 py-4 rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-purple-400/20 text-white text-xl hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all"
      >
        🎤
      </motion.button>
    </div>
  );
};

export default SearchBar;