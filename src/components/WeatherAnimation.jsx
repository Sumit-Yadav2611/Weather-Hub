const WeatherAnimation = ({ condition }) => {
  if (condition === "Rain") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-6 bg-cyan-300 opacity-40 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${0.5 + Math.random()}s`,
            }}
          />
        ))}
      </div>
    );
  }

  if (condition === "Snow") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white text-xl animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            ❄
          </div>
        ))}
      </div>
    );
  }

  if (condition === "Clear") {
    return (
      <div className="absolute top-10 right-10 h-60 w-60 rounded-full bg-yellow-400/20 blur-3xl pointer-events-none" />
    );
  }

  return null;
};

export default WeatherAnimation;