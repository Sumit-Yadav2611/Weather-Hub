const WeatherAlert = ({ weather }) => {
  if (!weather) return null;

  const temp = weather.main.temp;
  const condition = weather.weather[0].main;

  let alert = null;

  if (temp >= 40) {
    alert = {
      icon: "🔥",
      title: "Heat Wave Warning",
      message: "Temperature is extremely high. Stay hydrated.",
      color: "bg-red-500",
    };
  } else if (condition === "Rain") {
    alert = {
      icon: "🌧️",
      title: "Rain Alert",
      message: "Carry an umbrella before going outside.",
      color: "bg-blue-500",
    };
  } else if (condition === "Thunderstorm") {
    alert = {
      icon: "⛈️",
      title: "Thunderstorm Alert",
      message: "Avoid open areas and stay indoors.",
      color: "bg-purple-600",
    };
  } else if (condition === "Snow") {
    alert = {
      icon: "❄️",
      title: "Snow Alert",
      message: "Roads may be slippery. Travel carefully.",
      color: "bg-cyan-500",
    };
  }

  if (!alert) return null;

  return (
    <div
      className={`max-w-4xl mx-auto mt-6 p-5 rounded-2xl text-white shadow-xl ${alert.color}`}
    >
      <div className="flex items-center gap-4">
        <span className="text-4xl">{alert.icon}</span>

        <div>
          <h2 className="text-xl font-bold">
            {alert.title}
          </h2>

          <p className="opacity-90">
            {alert.message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherAlert;