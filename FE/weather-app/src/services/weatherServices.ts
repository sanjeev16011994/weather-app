import axios from "axios";

export const getCurrentWeather = async (city: string) => {
  try {
    const response = await axios.get(
      `https://weather-app-6u9t.onrender.com/weather?city=${city}`
    );
    if (response.data.cod === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};
