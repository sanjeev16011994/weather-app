import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../dataContext";
import dayjs from "dayjs";
import sunriseImg from "../../assets/images/sunrise.gif";
import sunsetImg from "../../assets/images/sunset.gif";
import wind from "../../assets/images/wind.gif";
import humidityImg from "../../assets/images/humidity.gif";
import visibilityImg from "../../assets/images/visiblity.gif";

const TodaysDetails: React.FC = () => {
  const { weatherData } = useContext(DataContext);

  const uvi = weatherData?.current?.uvi || 0;
  const windSpeed = weatherData?.wind?.speed;
  const windDeg = weatherData?.wind?.deg;
  const humidity = weatherData?.main?.humidity;
  const visibility = weatherData?.visibility;
  const sunrise = weatherData?.sys?.sunrise;
  const sunset = weatherData?.sys?.sunset;

  const [options, setOptions] = useState({
    type: "radial-gauge",
    value: 150,
    scale: {
      min: 0,
      max: 11,
    },
    label: {
      format: (value: number) => `${value}`,
    },
  });

  useEffect(() => {
    setOptions((prev) => ({
      ...prev,
      value: uvi,
    }));
  }, [uvi]);

  return (
    <div className="flex flex-col gap-4 mt-5">
      <h1 className="text-lg font-semibold">Today's Highlights</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
        <div className="bg-white rounded-3xl shadow-md p-5 h-full flex flex-col">
          <h4 className="text-sm font-semibold text-gray-500 mb-2">UV Index</h4>
          <p className="text-sm text-gray-500 italic flex-1">
            Data not available
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-5 h-full flex flex-col">
          <h4 className="text-sm font-semibold text-gray-500 mb-2">
            Wind Status
          </h4>
          <div className="flex-1 flex items-center justify-center gap-3">
            <img src={wind} width={50} height={50} />
            <span className="text-4xl font-bold">{windSpeed} km/h</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-5 h-full flex flex-col">
          <h4 className="text-sm font-semibold text-gray-500 mb-2">
            Sunrise & Sunset
          </h4>
          <div className="flex flex-col gap-4 mt-3 flex-1">
            <div className="text-2xl flex gap-2 font-semibold items-center">
              <img src={sunriseImg} width={50} height={50} />
              {sunrise ? dayjs.unix(sunrise).format("HH:mm") : "--"}
            </div>
            <div className="text-2xl flex gap-2 font-semibold items-center">
              <img src={sunsetImg} width={50} height={50} />
              {sunset ? dayjs.unix(sunset).format("HH:mm") : "--"}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-5 h-full flex flex-col">
          <h4 className="text-sm font-semibold text-gray-500 mb-2">Humidity</h4>
          <div className="flex gap-5 items-center justify-center flex-1">
            <img src={humidityImg} width={50} height={50} />
            <div className="text-4xl font-bold">{humidity}%</div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-5 h-full flex flex-col">
          <h4 className="text-sm font-semibold text-gray-500 mb-2">
            Visibility
          </h4>
          <div className="flex items-center justify-center gap-3 flex-1">
            <img src={visibilityImg} width={50} height={50} />
            <div className="text-4xl font-bold">{visibility} km/h</div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-5 h-full flex flex-col">
          <h4 className="text-sm font-semibold text-gray-500 mb-2">
            Air Quality
          </h4>
          <p className="text-sm text-gray-500 italic flex-1">
            Data not available
          </p>
        </div>
      </div>
    </div>
  );
};

export default TodaysDetails;
