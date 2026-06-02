import { useState } from "react";
import {
  getWeatherByCity,
  getWeatherByCoords,
  getForecast,
  getAirQuality,
} from "../services/weatherApi";

export const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [aqi, setAqi] = useState(null);
  const [loading, setLoading] = useState(false);

  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const fetchByCity = async (city) => {
    try {
      setLoading(true);

      const data = await getWeatherByCity(city);
      setWeather(data);

      const forecastData = await getForecast(
        data.coord.lat,
        data.coord.lon
      );

      setForecast(forecastData);

      const aqiData = await getAirQuality(
          data.coord.lat,
          data.coord.lon
        );

        setAqi(aqiData);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          setLoading(true);

          const { latitude, longitude } = position.coords;

          const data = await getWeatherByCoords(
            latitude,
            longitude
          );

          setWeather(data);

          const forecastData = await getForecast(
            latitude,
            longitude
          );

          setForecast(forecastData);

          const aqiData = await getAirQuality(
              latitude,
              longitude
            );

            setAqi(aqiData);

        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const addFavorite = (city) => {
    if (!favorites.includes(city)) {
      const updatedFavorites = [...favorites, city];

      setFavorites(updatedFavorites);

      localStorage.setItem(
        "favorites",
        JSON.stringify(updatedFavorites)
      );
    }
  };

  const removeFavorite = (city) => {
    const updatedFavorites = favorites.filter(
      (item) => item !== city
    );

    setFavorites(updatedFavorites);

    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    );
  };

  return {
    weather,
    forecast,
    loading,
    favorites,
    addFavorite,
    removeFavorite,
    fetchByCity,
    fetchCurrentLocation,
    aqi,
  };
};