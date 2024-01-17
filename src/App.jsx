import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "./Components/Layout";
import { TiWeatherStormy, TiWeatherPartlySunny } from "react-icons/ti";

function WeatherApp() {
  const [location, setLocation] = useState({});
  const [weather, setWeather] = useState({});
  const [unit, setUnit] = useState("C");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  }, []);

  useEffect(() => {
    if (location.lat && location.lon) {
      axios
        .get(
          `https://weather-proxy.freecodecamp.rocks/api/current?lat=${location.lat}&lon=${location.lon}`,
        )
        .then((response) => {
          setWeather(response.data);
        });
    }
  }, [location]);

  const toggleUnit = () => {
    setUnit(unit === "C" ? "F" : "C");
  };

  const getTemperature = () => {
    if (unit === "C") {
      return weather.main.temp;
    } else {
      return (weather.main.temp * 9) / 5 + 32;
    }
  };

  return (
    <>
      <Layout>
        <div className="flex items-center justify-center gap-3 rounded-lg bg-black p-4 text-[#FFD23F]">
          <TiWeatherStormy className="h-10 w-10" />
          <h1 className="text-3xl font-extrabold sm:text-3xl md:text-4xl lg:text-5xl">
            Local Weather
          </h1>
          <TiWeatherPartlySunny className="h-10 w-10 " />
        </div>
        <div className="flex w-6/12 items-center justify-around gap-2 sm:gap-3 md:gap-4 lg:gap-6">
          <div className="p-4">
            {weather.main ? (
              <div>
                <h1 className="text-2xl font-bold">{weather.name}</h1>
                <h2 className="text-xl">
                  {getTemperature()} °{unit}
                </h2>
                <button
                  className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
                  onClick={toggleUnit}
                >
                  Toggle Unit
                </button>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default WeatherApp;
