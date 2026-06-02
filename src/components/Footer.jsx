const Footer = () => {
  return (
    <footer className="mt-20 border-t border-cyan-400/10">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center">

        <h3 className="text-white text-xl font-semibold">
          Weather<span className="text-cyan-400">-Hub</span>
        </h3>

        <p className="text-slate-400 mt-2">
          Live Weather • AQI • Forecasts • Maps
        </p>

        <p className="text-slate-500 mt-4 text-sm">
          Built with React, Tailwind CSS, OpenWeather API & Leaflet
        </p>

        <p className="text-slate-500 mt-2 text-sm">
          © 2026 Sumit Yadav. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;