import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;
const WeatherMap = ({ weather }) => {
  if (!weather) return null;

const [layer, setLayer] = useState("precipitation_new");  
  
  const lat = weather.coord.lat;
  const lon = weather.coord.lon;

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-white">
        🗺️ Weather Map
      </h2>

      <div className="overflow-hidden rounded-3xl border border-cyan-400/20">

    <div className="flex gap-3 mb-4">
  <button
    onClick={() => setLayer("precipitation_new")}
    className="px-4 py-2 rounded-xl bg-cyan-500 text-white"
  >
    🌧️ Rain
  </button>

  <button
    onClick={() => setLayer("clouds_new")}
    className="px-4 py-2 rounded-xl bg-slate-500 text-white"
  >
    ☁️ Clouds
  </button>

  <button
    onClick={() => setLayer("temp_new")}
    className="px-4 py-2 rounded-xl bg-orange-500 text-white"
  >
    🌡️ Temperature
  </button>
</div>

        <MapContainer
          center={[lat, lon]}
          zoom={10}
          style={{
            height: "400px",
            width: "100%",
          }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <TileLayer
              url={`https://tile.openweathermap.org/map/${layer}/{z}/{x}/{y}.png?appid=${API_KEY}`}
              opacity={0.7}
            />

          <Marker position={[lat, lon]}>
            <Popup>
              {weather.name}
              <br />
              {Math.round(weather.main.temp)}°C
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default WeatherMap;