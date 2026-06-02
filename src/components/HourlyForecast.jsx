const HourlyForecast = ({ forecast }) => {
  if (!forecast) return null;

  const hourlyData = forecast.list.slice(0, 8);

  return (
    <div className="max-w-5xl mx-auto mt-8">
      <h2 className="text-white text-2xl font-bold mb-4">
        Hourly Forecast
      </h2>

      <div className="flex gap-4 overflow-x-auto pb-4">

        {hourlyData.map((hour, index) => (
          <div
            key={index}
            className="min-w-[120px] rounded-2xl bg-slate-900/40 backdrop-blur-xl border border-cyan-400/20 p-4 text-white text-center"
          >
            <p className="font-semibold">
              {new Date(hour.dt_txt).toLocaleTimeString([], {
                hour: "numeric",
              })}
            </p>

            <div className="text-4xl my-2">
              {hour.weather[0].main === "Clear"
                ? "☀️"
                : hour.weather[0].main === "Clouds"
                ? "☁️"
                : hour.weather[0].main === "Rain"
                ? "🌧️"
                : hour.weather[0].main === "Thunderstorm"
                ? "⛈️"
                : hour.weather[0].main === "Snow"
                ? "❄️"
                : "🌤️"}
            </div>

            <p className="text-xl font-bold">
              {Math.round(hour.main.temp)}°
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default HourlyForecast;