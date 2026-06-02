const WeatherBackground = ({ condition, darkMode }) => {
  if (!darkMode) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400 via-blue-300 to-cyan-200" />
    );
  }

  switch (condition) {
    case "Clear":
      return (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0c4a6e]" />

          <div className="absolute top-20 right-20 h-64 w-64 rounded-full bg-yellow-400/20 blur-3xl" />

          <div className="absolute bottom-20 left-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
        </>
      );

    case "Clouds":
      return (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700" />

          <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-gray-400/10 blur-3xl" />
        </>
      );

    case "Rain":
      return (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900" />

          <div className="absolute top-20 right-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="absolute bottom-20 left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        </>
      );

    case "Snow":
      return (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-300 via-slate-200 to-white" />

          <div className="absolute top-20 right-20 h-72 w-72 rounded-full bg-white/30 blur-3xl" />
        </>
      );

    case "Thunderstorm":
      return (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-slate-800" />

          <div className="absolute top-10 left-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
        </>
      );

    default:
      return (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#001f2d]" />

          <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        </>
      );
  }
};

export default WeatherBackground;