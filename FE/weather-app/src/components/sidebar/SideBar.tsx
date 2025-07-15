import { JSX, useContext, useEffect, useState } from "react";
import {} from "react-icons";
import { BiSearch } from "react-icons/bi";
import { DataContext } from "../../dataContext";
import React from "react";
import dayjs from "dayjs";
import { getCurrentWeather } from "../../services/weatherServices";

const SideBar: React.FC = (): JSX.Element => {
   const context = useContext(DataContext);

if (!context) {
  throw new Error("DataContext must be used within a DataContext.Provider");
}

const { weatherData,setWeatherData } = context;
  console.log(weatherData);
  const weatherIconCode = weatherData?.weather[0]?.icon;
  const iconUrl = `https://openweathermap.org/img/wn/${weatherIconCode}@2x.png`;

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      getWeatherDetails();
    }, 1000);

    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

  const getWeatherDetails = async () => {
    if (searchQuery) {
      const data = await getCurrentWeather(searchQuery);
      setWeatherData(data);
    }
  };

  return (
    <div className="sidebar flex flex-col gap-4 ">
      <div className="flex items-center rounded-2xl  bg-gray-200 text-gray-900  ">
        <div className="flex-1 items-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 search-input focus:outline-none focus:ring-0 focus:border-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="mx-auto pr-4">
          <BiSearch className="ml-4 text-blue-500" />
        </div>
      </div>
      <div className=" p-4 flex justify-content-center items-center border-1  ">
        <img
          src={iconUrl}
          alt="User"
          className="rounded-full w-30 h-30 mx-auto"
        />
      </div>
      <div className="border-b-3 border-gray-100 pb-5 ">
        <WeatherCard weatherData={weatherData} />
      </div>
      <div className="p-4 flex justify-center items-center">
        <div className="shadow-lg rounded-xl w-full relative p-4">
          <CityImage cityName={weatherData?.name} />
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white  text-lg font-semibold">
            {weatherData?.name}
          </h1>
        </div>
      </div>

      <div className=" p-4 flex justify-content-center items-center border-1  "></div>
    </div>
  );
};

export default SideBar;


function WeatherCard({ weatherData }: { weatherData: any }) {
  const tempKelvin = weatherData?.main.temp;
  const tempCelsius = (tempKelvin - 273.15).toFixed(1);

  return (
    <div>
      <h1 className="text-7xl text-black text-center  ">{tempCelsius}°C</h1>
      <p className="text-black text-center mt-4 font-semibold opacity-40 ">
        {dayjs().format("dddd HH:mm")}
      </p>
    </div>
  );
}

const CityImage = ({ cityName }: { cityName : any }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      const apiKey = "NtItoeXdRpH7WFKayIqtn4RalWy28Li2AaesJj1CEa5mBD9LdoI912sV";
      const res = await fetch(
        `https://api.pexels.com/v1/search?query=${cityName}&per_page=1`,
        {
          headers: {
            Authorization: apiKey,
          },
        }
      );
      const data = await res.json();
      const url = data.photos?.[0]?.src?.landscape;
      setImageUrl(url);
    };

    if (cityName) fetchImage();
  }, [cityName]);

  return <img src={imageUrl} alt={cityName} className="w-full h-auto" />;
};
