import { useEffect, useState } from "react";
import Layout from "./components/layout";
import {
  getCurrentWeather,
} from "./services/weatherServices";
import { DataContext } from "./dataContext";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    getWeatherDetails();
  }, []);

  const getWeatherDetails = async () => {
    const data = await getCurrentWeather("mumbai");
    setWeatherData(data);
  };

  return (
    <DataContext.Provider value={{ weatherData, setWeatherData }}>
      <Layout />
    </DataContext.Provider>
  );
}

export default App;
